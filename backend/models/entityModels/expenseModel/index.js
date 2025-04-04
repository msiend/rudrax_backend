
const pool = require('@/config/dbConfig');

class ExpenseModel {
   constructor(exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_entity, exp_project_ref) {
      this.exp_name = exp_name;
      this.exp_amount = exp_amount;
      this.exp_mode = exp_mode;
      this.exp_remark = exp_remark;
      this.exp_date = exp_date;
      this.exp_category = exp_category;
      this.exp_entity = exp_entity;
      this.exp_project_ref = exp_project_ref;
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
   static async findOne(exp_id) {
      const query = 'SELECT * FROM expenses WHERE exp_id = ?';
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
   static async create(exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_project_ref) {
      const query = `INSERT INTO expenses (exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_project_ref) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_project_ref]);
         if (result.affectedRows > 0) {
            return {
               exp_id: result.insertId,
               exp_name,
               exp_amount,
               exp_mode,
               exp_remark,
               exp_date,
               exp_category,
               exp_project_ref,
            };
         }
      } catch (error) {
         console.error('Error creating expense:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Update an existing expense
   static async update(exp_id, exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_project_ref) {
      const query = `UPDATE expenses 
                     SET exp_name = ?, exp_amount = ?, exp_mode = ?, exp_remark = ?, exp_date = ?, exp_category = ?,  exp_project_ref = ?
                     WHERE exp_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_project_ref, exp_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating expense with ID ${exp_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Delete an expense
   static async remove(exp_id) {
      const query = 'DELETE FROM expenses WHERE exp_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [exp_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting expense with ID ${exp_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Paginated fetch of expenses
   static async paginate(page = 1, limit = 10) {
      const offset = (page - 1) * limit;
      const query = `SELECT * FROM expenses ORDER BY exp_date DESC LIMIT ? OFFSET ?`;
      const countQuery = `SELECT COUNT(*) AS total FROM expenses`;
      
      const connPool = await pool.getConnection();
      try {
         const [[{ total }]] = await connPool.query(countQuery);
         const [rows] = await connPool.query(query, [limit, offset]);

         return {
            totalRecords: total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            pageSize: limit,
            data: rows,
         };
      } catch (error) {
         console.error('Error fetching paginated expenses:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = ExpenseModel;
