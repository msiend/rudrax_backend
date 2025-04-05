const pool = require('@/config/dbConfig');

class MaterialItemUpdateModel {
   static async updateMdApproval(mr_item_id) {
      const query = 'UPDATE material_item_list SET md_approval = 1 WHERE mr_item_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [mr_item_id]);
         return result.affectedRows;
      } catch (error) {
         console.error('Error updating md_approval:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async updateFdApproval(mr_item_id) {
      const query = 'UPDATE material_item_list SET fd_approval = 1 WHERE mr_item_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [mr_item_id]);
         return result.affectedRows;
      } catch (error) {
         console.error('Error updating fd_approval:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async updateMrDeliveryStatus(mr_item_id) {
      const query = 'UPDATE material_item_list SET mr_delivery_status = 1 WHERE mr_item_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [mr_item_id]);
         return result.affectedRows;
      } catch (error) {
         console.error('Error updating mr_delivery_status:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
   static async getLastMaterialRef() {
      const query = 'SELECT material_ref_no FROM material_requests ORDER BY mr_r_id DESC LIMIT 1;';
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

module.exports = MaterialItemUpdateModel;
