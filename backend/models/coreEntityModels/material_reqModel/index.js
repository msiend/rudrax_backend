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
      const query = 'UPDATE material_item_list SET mr_delivery_status = 1 WHERE mr_item_id = ? ';
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
   static async insertMaterialRequestWithItems(materialRequestData, materialItemsData) {
      const conn = await pool.getConnection();
      try {
         await conn.beginTransaction();
         const requestQuery = `
            INSERT INTO material_requests (material_ref_no,  mr_project_id, mr_phase, mr_date) 
            VALUES (?, ?, ?, ?)
         `;
         const [requestResult] = await conn.query(requestQuery, [
            materialRequestData.material_ref_no,
            materialRequestData.mr_project_id,
            materialRequestData.mr_phase,
            materialRequestData.mr_date,
         ]);

         const mr_r_id = requestResult.insertId;
         const itemsQuery = `
            INSERT INTO material_item_list ( 
              mr_r_id, mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, 
                vendor_id
            ) VALUES ?
         `;

         const itemValues = materialItemsData.map((item) => [
            mr_r_id,
            materialRequestData.mr_project_id,
            item.mr_item_name,
            item.mr_item_quantity,
            item.mr_item_amount,
            item.mr_item_date,
            item.vendor_id,
         ]);

         await conn.query(itemsQuery, [itemValues]);

         await conn.commit();
         return { success: true, insertedId: mr_r_id, ref: materialRequestData.material_ref_no };
      } catch (error) {
         await conn.rollback();
         console.error('Transaction error:', error);
         throw error;
      } finally {
         conn.release();
      }
   }
   
   static async findAllByMatrialReqId() {
      const query = 'SELECT * FROM material_item_list WHERE mr_r_id=? ';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query,[mr_r_id]);
         return rows;
      } catch (error) {
         console.error('Error retrieving all material items:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

}

module.exports = MaterialItemUpdateModel;
