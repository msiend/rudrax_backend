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

   // Get all expenses
   static async getExpenseDetails(exp_id) {
      const query = `SELECT cp.*, c.con_name, p.pro_ref_no, p.pro_name, cl.client_name, cl.client_ref_no FROM contractor_payments cp LEFT JOIN contractors c ON cp.pay_con_id = c.con_id LEFT JOIN projects p ON cp.pay_project_id = p.pro_id LEFT JOIN clients cl ON p.pro_client_r_id = cl.client_id WHERE cp.pay_exp_id = ?; SELECT vp.*, v.vendor_name, p.pro_ref_no, p.pro_name, cl.client_name, cl.client_ref_no FROM vendor_payments vp LEFT JOIN vendors v ON vp.pay_vendor_id = v.vendor_id LEFT JOIN projects p ON vp.pay_project_id = p.pro_id LEFT JOIN clients cl ON p.pro_client_r_id = cl.client_id WHERE vp.pay_exp_id = ?;`;
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

   static async updateExpenseWithTransaction(
      expId,
      { expenseName, Amount, remarks, dateofexpense },
      contractorExpenses = [],
      vendorExpenses = []
   ) {
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         // 1. Update main expense
         await conn.query('UPDATE expenses SET exp_name=?, exp_amount=?, exp_remark=?, exp_date=? WHERE exp_id=?', [
            expenseName,
            Amount,
            remarks,
            dateofexpense,
            expId,
         ]);

         // 2. Clear old payments
         await conn.query('DELETE FROM contractor_payments WHERE pay_exp_id=?', [expId]);
         await conn.query('DELETE FROM vendor_payments WHERE pay_exp_id=?', [expId]);

         // 3. Add new contractor payments
         for (const item of contractorExpenses) {
            await conn.query(
               'INSERT INTO contractor_payments (pay_con_id, pay_project_id, pay_amount, pay_note, pay_exp_id) VALUES (?, ?, ?, ?, ?)',
               [item.contractor, item.project_id, item.amount.toString(), item.note, expId]
            );
         }

         // 4. Add new vendor payments
         for (const item of vendorExpenses) {
            await conn.query(
               'INSERT INTO vendor_payments (pay_vendor_id, pay_project_id, pay_amount, pay_note, pay_exp_id) VALUES (?, ?, ?, ?, ?)',
               [item.vendor, item.project_id, item.amount.toString(), item.note, expId]
            );
         }

         await conn.commit();
         return { success: true };
      } catch (error) {
         await conn.rollback();
         console.error('Transaction failed:', error);
         throw error;
      } finally {
         conn.release();
      }
   }
}
module.exports = ExpenseModel;
