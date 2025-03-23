const pool = require('@/config/dbConfig');

class projectModel {
   constructor() {
      
   }
   static async getLastClientRef() {
      const query = 'SELECT pro_ref_no FROM projects ORDER BY pro_id DESC LIMIT 1';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving all clients:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = projectModel;
