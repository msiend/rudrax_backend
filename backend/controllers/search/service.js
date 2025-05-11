const pool = require('@/config/dbConfig');
const entityQueries = require('@/models/search');

async function searchEntities(searchTerm, entityType = 'all', page = 1, pageSize = 1) {
   const offset = (page - 1) * pageSize;
   let results = [];
   let totalCount = 0;
   const connPool = await pool.getConnection();
   const searchPattern = `%${searchTerm}%`;
   try {
      if (entityType === 'all') {
         for (const [type, queries] of Object.entries(entityQueries)) {
            const [rows] = await connPool.query(
               queries.sql,
               Array(queries.sql.split('?').length - 1).fill(searchPattern)
            );
            const [countRows] = await connPool.query(
               queries.countSql,
               Array(queries.countSql.split('?').length - 1).fill(searchPattern)
            );
            results = results.concat(rows);
            totalCount += countRows[0].total;
         }
         results = results.slice(offset, offset + pageSize);
      } else {
         const queries = entityQueries[entityType];
         if (!queries) {
            throw new Error('Invalid entity type');
         }
         const [rows] = await connPool.query(`${queries.sql} LIMIT ? OFFSET ?`, [
            ...Array(queries.sql.split('?').length - 1).fill(searchPattern),
            pageSize,
            offset,
         ]);
         const [countRows] = await connPool.query(
            queries.countSql,
            Array(queries.countSql.split('?').length - 1).fill(searchPattern)
         );
         results = rows;
         totalCount = countRows[0].total;
      }
      return {
         entityType: entityType,
         data: results,
         pagination: {
            total: totalCount,
            page,
            pageSize,
            totalPages: Math.ceil(totalCount / pageSize),
         },
      };
   } catch (error) {
      console.error('Search error:', error);
      throw error;
   }
}

module.exports = {
   searchEntities,
};
