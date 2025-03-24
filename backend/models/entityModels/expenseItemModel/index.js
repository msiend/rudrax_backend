// Hello, this is a Model for expense items!

const pool = require('@/config/dbConfig');

class ExpItemModel {
   constructor(exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id) {
      this.exp_item_name = exp_item_name;
      this.exp_item_quantity = exp_item_quantity;
      this.exp_item_rate = exp_item_rate;
      this.exp_ref_id = exp_ref_id;
   }

   static async findAll(exp_ref_id) {
      const query = 'SELECT * FROM expense_item WHERE exp_ref_id=?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query,[exp_ref_id]);
         return rows;
      } catch (error) {
         console.error('Error retrieving all expense items:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async findOne(exp_item_id) {
      const query = 'SELECT * FROM expense_item WHERE exp_item_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [exp_item_id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving expense item with ID ${exp_item_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async create(exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id) {
      const query = `INSERT INTO expense_item (exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id) 
                     VALUES (?, ?, ?, ?)`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id]);
         if (result.affectedRows > 0) {
            return {
               exp_item_id: result.insertId,
               exp_item_name,
               exp_item_quantity,
               exp_item_rate,
               exp_ref_id,
            };
         }
      } catch (error) {
         console.error('Error creating expense item:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async update(exp_item_id, exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id) {
      const query = `UPDATE expense_item 
                     SET exp_item_name = ?, exp_item_quantity = ?, exp_item_rate = ?, exp_ref_id = ? 
                     WHERE exp_item_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id, exp_item_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating expense item with ID ${exp_item_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async remove(exp_item_id) {
      const query = 'DELETE FROM expense_item WHERE exp_item_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [exp_item_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting expense item with ID ${exp_item_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = ExpItemModel;
