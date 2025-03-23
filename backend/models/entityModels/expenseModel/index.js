// Hello, this is a Model for expenses!

const pool = require('@/config/dbConfig');

class ExpensesModel {
   constructor(expAmount, expMode, expRemark, expDate) {
      this.expAmount = expAmount;
      this.expMode = expMode;
      this.expRemark = expRemark;
      this.expDate = expDate;
   }

   // Get all expenses
   static async findAll() {
      const query = 'SELECT * FROM expenses ORDER BY exp_date DESC';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving all expenses:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Get a single expense by ID
   static async findOne(expId) {
      const query = 'SELECT * FROM expenses WHERE exp_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [expId]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving expense with ID ${expId}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Create a new expense
   static async create(expAmount, expMode, expRemark, expDate) {
      const query = `INSERT INTO expenses (exp_amount, exp_mode, exp_remark, exp_date) VALUES (?, ?, ?, ?)`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [expAmount, expMode, expRemark, expDate]);
         if (result.affectedRows > 0) {
            let affectedData = {
               exp_id: result.insertId,
               exp_amount: expAmount,
               exp_mode: expMode,
               exp_remark: expRemark,
               exp_date: expDate,
            };
            return affectedData;
         }
      } catch (error) {
         console.error('Error creating expense:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Update an existing expense
   static async update(expId, expAmount, expMode, expRemark, expDate) {
      const query = `UPDATE expenses 
                     SET exp_amount = ?, exp_mode = ?, exp_remark = ?, exp_date = ? 
                     WHERE exp_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [expAmount, expMode, expRemark, expDate, expId]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating expense with ID ${expId}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Delete an expense
   static async remove(expId) {
      const query = 'DELETE FROM expenses WHERE exp_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [expId]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting expense with ID ${expId}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = ExpensesModel;
