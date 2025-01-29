const pool = require('@/config/dbConfig');

class BranchAuthModel {
   constructor(br_a_id, br_r_id, br_email, br_password, br_token, br_isactive) {
      this.br_a_id = br_a_id;
      this.br_r_id = br_r_id;
      this.br_email = br_email;
      this.br_password = br_password;
      this.br_token = br_token;
      this.br_isactive = br_isactive;
   }

   static async findAll() {
      const query = 'SELECT br_a_id, br_r_id, br_email, br_password FROM branch_auth';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving branch auth records:', error);
      } finally {
         connPool.release();
      }
   }

   static async findOne(id) {
      const query = 'SELECT br_a_id, br_r_id, br_email, br_password FROM branch_auth WHERE br_a_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving branch auth record with ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }

   static async create(br_r_id, br_email, br_password) {
      const query = 'INSERT INTO branch_auth (br_r_id, br_email, br_password) VALUES (?, ?, ?)';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [br_r_id, br_email, br_password]);
         return result;
      } catch (error) {
         console.error('Error creating branch auth record:', error);
      } finally {
         connPool.release();
      }
   }

   static async update(id, br_r_id, br_email, br_password) {
      const query = 'UPDATE branch_auth SET br_r_id = ?, br_email = ?, br_password = ? WHERE br_a_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [br_r_id, br_email, br_password, id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating branch auth record with ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }
   static async findByLoginInfo(email) {
      const promisePool = await pool.getConnection();
      const selectUserSQL =
         'SELECT br_a_id as id, br_email as email, br_password as password FROM branch_auth WHERE br_email = ? LIMIT 0,1';
      try {
         const [rows] = await promisePool.query(selectUserSQL, [email]);
         if (rows.length > 0) {
            const { id, password, email } = rows[0];
            return { id, password, email };
         }
         return null;
      } catch (error) {
         console.error(`Error Finding Info  br_admin with email: ${email}:`, error);
      }
   }

   static async updatePassword(id, br_password) {
      const query = 'UPDATE branch_auth SET br_password = ? WHERE br_a_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [br_password, id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating password for branch auth record with ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }

   static async updateToken(id, br_token) {
      const query = 'UPDATE branch_auth SET br_token = ? WHERE br_a_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [br_token, id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating token for branch auth record with ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }

   static async deleteOne(id) {
      const query = 'DELETE FROM branch_auth WHERE br_a_id = ?';
      const connPool = await pool.getConnection();
      try {
         await connPool.query(query, [id]);
         console.log(`Branch auth record with ID ${id} deleted successfully.`);
      } catch (error) {
         console.error(`Error deleting branch auth record with ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }
   static async updateIsActive(id, isActive) {
      const query = `UPDATE branch_auth SET br_isactive = ? WHERE a_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [isActive, id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating isActive status in table ${tableName} for ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }
   static async getUserByToken(refreshToken) {
      const promisePool = await pool.getConnection();
      const updateSQL = 'SELECT br_a_id as id, br_email as email FROM branch_auth WHERE br_token = ?';
      try {
         const [rows] = await promisePool.query(updateSQL, [refreshToken]);
         if (rows.length > 0) {
            return rows[0];
         }
         return null;
      } catch (error) {
         console.error(`Error retrieve userInfo branch_auth !`, error);
      }
   }
   static async DeleteToken(refreshToken) {
      const promisePool = await pool.getConnection();
      const updateSQL = `UPDATE branch_auth SET br_token ='' WHERE br_token = ?`;
      try {
         const [rows] = await promisePool.query(updateSQL, [refreshToken]);
         if (rows.length > 0) {
            return { status: true, msg: 'refresh token added!' };
         }
         return null;
      } catch (error) {
         console.error(`Error Updating refreshToken branch_auth with ID:`, error);
      }
   }
}

module.exports = BranchAuthModel;
