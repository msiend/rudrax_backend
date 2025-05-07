const pool = require('@/config/dbConfig');

class PayModel {
   constructor(pay_con_id, pay_project_id, pay_amount, pay_note, pay_mode) {
      this.pay_con_id = pay_con_id;
      this.pay_project_id = pay_project_id;
      this.pay_amount = pay_amount;
      this.pay_note = pay_note;
      this.pay_mode = pay_mode;
   }

   static async findAll(pay_con_id) {
      const query = 'SELECT * FROM contractor_payments WHERE pay_con_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [pay_con_id]);
         return rows;
      } catch (error) {
         console.error('Error retrieving all payments:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async findOne(pay_id) {
      const query = 'SELECT * FROM contractor_payments WHERE pay_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [pay_id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving payment with ID ${pay_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async create(pay_con_id, pay_project_id, pay_amount, pay_note, pay_exp_id, pay_mode) {
      const query = `
         INSERT INTO contractor_payments 
         (pay_con_id, pay_project_id, pay_amount, pay_note, pay_exp_id, pay_mode) 
         VALUES (?, ?, ?, ?, ?, ?)`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [pay_con_id, pay_project_id, pay_amount, pay_note, pay_exp_id, pay_mode]);
         if (result.affectedRows > 0) {
            return {
               pay_id: result.insertId,
               pay_con_id,
               pay_project_id,
               pay_amount,
               pay_note,
               pay_mode
            };
         }
      } catch (error) {
         console.error('Error creating payment:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async update(pay_id, pay_con_id, pay_project_id, pay_amount, pay_note, pay_mode) {
      const query = `
         UPDATE contractor_payments 
         SET pay_con_id = ?, pay_project_id = ?, pay_amount = ?, pay_note = ?, pay_mode = ?
         WHERE pay_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [pay_con_id, pay_project_id, pay_amount, pay_note, pay_mode, pay_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating payment with ID ${pay_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async remove(pay_id) {
      const query = 'DELETE FROM contractor_payments WHERE pay_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [pay_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting payment with ID ${pay_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async paginate(page, limit) {
      const offset = (page - 1) * limit;
      const query = 'SELECT * FROM contractor_payments LIMIT ? OFFSET ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [limit, offset]);
         return rows;
      } catch (error) {
         console.error('Error retrieving paginated payments:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = PayModel;
