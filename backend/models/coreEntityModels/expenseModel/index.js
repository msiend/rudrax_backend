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

   // Get all expenses
   static async getExpenseDetails(exp_id) {
      const query = `SELECT cp.*, c.con_name, p.pro_ref_no, p.pro_name, cl.client_name, cl.client_ref_no FROM contractor_payments cp LEFT JOIN contractors c ON cp.pay_con_id = c.con_id LEFT JOIN projects p ON cp.pay_project_id = p.pro_id LEFT JOIN clients cl ON p.pro_client_r_id = cl.client_id WHERE cp.pay_exp_id = ?; SELECT vp.*, v.vendor_name, p.pro_ref_no, p.pro_name, cl.client_name, cl.client_ref_no FROM vendor_payments vp LEFT JOIN vendors v ON vp.pay_vendor_id = v.vendor_id LEFT JOIN projects p ON vp.pay_project_id = p.pro_id LEFT JOIN clients cl ON p.pro_client_r_id = cl.client_id WHERE vp.pay_exp_id = ?;`
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [exp_id, exp_id]);
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
