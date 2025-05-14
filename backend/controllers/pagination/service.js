const pool = require('@/config/dbConfig');
const entityQuerieModels = require('@/models/pagination');

class PaginationServices {
   async paginate({ entity, page, pageSize, search = '' }) {
      const offset = (page - 1) * pageSize;
      const queries = entityQuerieModels[entity];
      if (!queries) {
         throw new Error(`Pagination not configured for entity: ${entity}`);
      }
      const likeSearch = `%${search}%`;
      const searchParams = new Array((queries.sql.match(/\?/g) || []).length).fill(likeSearch);
      const [rows] = await pool.query(`${queries.sql} LIMIT ? OFFSET ?`, [...searchParams, pageSize, offset]);
      const [[{ total }]] = await pool.query(queries.countSql, searchParams);
      return {
         data: rows,
         pagination: {
            total,
            pageSize,
            currentPage: page,
            lastPage: Math.ceil(total / pageSize),
            from: offset + 1,
            to: Math.min(offset + pageSize, total),
         },
      };
   }
}

module.exports = new PaginationServices();
