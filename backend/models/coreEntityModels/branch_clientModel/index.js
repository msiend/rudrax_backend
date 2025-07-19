//Hello, this is a Model for branchClients!
// BranchClients.js
const pool = require('@/config/dbConfig');

class BranchClientsModel {
   constructor() {}

   static async AproveBranchClients() {
      const query = 'SELECT * FROM branch_clients';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving branch clients:', error);
      } finally {
         connPool.release();
      }
   }
      static async getLastBranchRef() {
      const query = 'SELECT b_client_ref_no FROM branch_clients ORDER BY b_client_id DESC LIMIT 1';
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

module.exports = BranchClientsModel;
