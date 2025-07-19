const pool = require('@/config/dbConfig');

class ExpenseModel {
   constructor(exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_project_ref) {
      this.exp_name = exp_name;
      this.exp_amount = exp_amount;
      this.exp_mode = exp_mode;
      this.exp_remark = exp_remark;
      this.exp_date = exp_date;
      this.exp_category = exp_category;
      this.exp_project_ref = exp_project_ref;
   }
   static async findAllWithAll_Date() {
      const query = 'SELECT * FROM expenses ORDER BY exp_date DESC ';
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

}
module.exports = ExpenseModel;
