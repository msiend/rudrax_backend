// Hello, this is a Model for material item list!

const pool = require('@/config/dbConfig');

class MaterialItemModel {
   constructor(mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status) {
      this.mr_project_r_id = mr_project_r_id;
      this.mr_item_name = mr_item_name;
      this.mr_item_quantity = mr_item_quantity;
      this.mr_item_amount = mr_item_amount;
      this.mr_item_date = mr_item_date;
      this.md_approval = md_approval;
      this.fd_approval = fd_approval;
      this.vendor_id = vendor_id;
      this.mr_delivery_status = mr_delivery_status;
   }

   static async findAll() {
      const query = 'SELECT * FROM material_item_list where ';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving all material items:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async findOne(mr_item_id) {
      const query = 'SELECT * FROM material_item_list WHERE mr_item_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [mr_item_id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving material item with ID ${mr_item_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async create(mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status) {
      const query = `INSERT INTO material_item_list (mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [
            mr_project_r_id, 
            mr_item_name, 
            mr_item_quantity, 
            mr_item_amount, 
            mr_item_date, 
            md_approval, 
            fd_approval, 
            vendor_id, 
            mr_delivery_status
         ]);
         if (result.affectedRows > 0) {
            return {
               mr_item_id: result.insertId,
               mr_project_r_id,
               mr_item_name,
               mr_item_quantity,
               mr_item_amount,
               mr_item_date,
               md_approval,
               fd_approval,
               vendor_id,
               mr_delivery_status
            };
         }
      } catch (error) {
         console.error('Error creating material item:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async update(mr_item_id, mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status) {
      const query = `UPDATE material_item_list 
                     SET mr_project_r_id = ?, mr_item_name = ?, mr_item_quantity = ?, mr_item_amount = ?, mr_item_date = ?, md_approval = ?, fd_approval = ?, vendor_id = ?, mr_delivery_status = ? 
                     WHERE mr_item_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [
            mr_project_r_id, 
            mr_item_name, 
            mr_item_quantity, 
            mr_item_amount, 
            mr_item_date, 
            md_approval, 
            fd_approval, 
            vendor_id, 
            mr_delivery_status,
            mr_item_id
         ]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating material item with ID ${mr_item_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async remove(mr_item_id) {
      const query = 'DELETE FROM material_item_list WHERE mr_item_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [mr_item_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting material item with ID ${mr_item_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async paginate(page, limit) {
      const offset = (page - 1) * limit;
      const query = 'SELECT * FROM material_item_list LIMIT ? OFFSET ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [limit, offset]);
         return rows;
      } catch (error) {
         console.error('Error retrieving paginated material items:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = MaterialItemModel;
