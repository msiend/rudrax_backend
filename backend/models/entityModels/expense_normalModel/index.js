const pool = require('@/config/dbConfig');

class ExpenseModel {
   constructor(
      exp_type,
      exp_name,
      exp_amount,
      exp_mode,
      exp_status,
      exp_attachment_url,
      exp_remark,
      exp_paid_by,
      exp_date,
      exp_category
   ) {
      this.exp_type = exp_type;
      this.exp_name = exp_name;
      this.exp_amount = exp_amount;
      this.exp_mode = exp_mode;
      this.exp_status = exp_status;
      this.exp_attachment_url = exp_attachment_url;
      this.exp_remark = exp_remark;
      this.exp_paid_by = exp_paid_by;
      this.exp_date = exp_date;
      this.exp_category = exp_category;
   }

   // Get all expense_normal
   static async findAll() {
      const query = 'SELECT * FROM expense_normal ORDER BY exp_date DESC';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving all expense_normal:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Get a single expense by ID
   static async findOne(exp_id) {
      const query = 'SELECT * FROM expense_normal WHERE exp_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [exp_id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving expense with ID ${exp_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Create a new expense
   static async create(
      exp_type,
      exp_name,
      exp_amount,
      exp_mode,
      exp_status,
      exp_attachment_url,
      exp_remark,
      exp_paid_by,
      exp_date,
      exp_category
   ) {
      const query = `
         INSERT INTO expense_normal (
            exp_type, exp_name, exp_amount, exp_mode, exp_status, 
            exp_attachment_url, exp_remark, exp_paid_by, 
            exp_date, exp_category
         ) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [
            exp_type,
            exp_name,
            exp_amount,
            exp_mode,
            exp_status,
            exp_attachment_url,
            exp_remark,
            exp_paid_by,
            exp_date,
            exp_category
         ]);
         if (result.affectedRows > 0) {
            return {
               status: true,
               msg: 'Expense created successfully.',
               exp_id: result.insertId
            };
         }
         return { status: false, msg: 'Failed to create expense.' };
      } catch (error) {
         console.error('Error creating expense:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Update an existing expense
   static async update(
      exp_id,
      exp_type,
      exp_name,
      exp_amount,
      exp_mode,
      exp_status,
      exp_attachment_url,
      exp_remark,
      exp_paid_by,
      exp_date,
      exp_category
   ) {
      const query = `
         UPDATE expense_normal SET
            exp_type = ?,
            exp_name = ?,
            exp_amount = ?,
            exp_mode = ?,
            exp_status = ?,
            exp_attachment_url = ?,
            exp_remark = ?,
            exp_paid_by = ?,
            exp_date = ?,
            exp_category = ?
         WHERE exp_id = ?
      `;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [
            exp_type,
            exp_name,
            exp_amount,
            exp_mode,
            exp_status,
            exp_attachment_url,
            exp_remark,
            exp_paid_by,
            exp_date,
            exp_category,
            exp_id
         ]);
         return {
            status: result.affectedRows > 0,
            msg: result.affectedRows > 0
               ? 'Expense updated successfully.'
               : 'No expense updated.'
         };
      } catch (error) {
         console.error(`Error updating expense with ID ${exp_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Delete an expense
   static async remove(exp_id) {
      const query = 'DELETE FROM expense_normal WHERE exp_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [exp_id]);
         return {
            status: result.affectedRows > 0,
            msg: result.affectedRows > 0
               ? 'Expense deleted successfully.'
               : 'No expense deleted.'
         };
      } catch (error) {
         console.error(`Error deleting expense with ID ${exp_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }


}

module.exports = ExpenseModel;
