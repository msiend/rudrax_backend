const pool = require('@/config/dbConfig');

class UserAuthModel {
   constructor(user_id, hashpassword, token, role, isactive) {
      this.user_id = user_id;
      this.hashpassword = hashpassword;
      this.token = token;
      this.role = role;
      this.isactive = isactive;
   }

   static async create(u_r_id, u_user_id, hashpassword, role) {
      const connPool = await pool.getConnection();
      try {
         const updateSQL = `UPDATE user_auth SET u_user_id = ?, u_password = ?, u_role = ? WHERE u_r_id = ?;`;
         const [result] = await connPool.query(updateSQL, [u_user_id, hashpassword, role, u_r_id]);

         if (result?.affectedRows) {
            return { status: true, result, msg: 'Successfully inserted or updated!' };
         } else {
            return { status: false, msg: 'Something went wrong!' };
         }
      } catch (error) {
         console.error('Transaction rolled back due to error:', error);
         return { status: false, error };
      } finally {
         connPool.release();
      }
   }

   static async findByLoginInfo(u_user_id) {
      const connPool = await pool.getConnection();
      const selectUserSQL = `SELECT u_a_id AS id, u_user_id AS user_id, u_password AS password, u_role AS role, u_isactive AS isactive FROM user_auth WHERE u_user_id = ? LIMIT 0,1;`;
      try {
         const [rows] = await connPool.query(selectUserSQL, [u_user_id]);
         if (rows.length > 0) {
            return rows[0];
         }
         return null;
      } catch (error) {
         console.error(`Error finding user_auth info for user_id ${u_user_id}:`, error);
         return null;
      } finally {
         connPool.release();
      }
   }

   static async updateRefreshToken(u_a_id, refreshToken) {
      const connPool = await pool.getConnection();
      const updateSQL = `UPDATE user_auth SET u_token = ? WHERE u_a_id = ?;`;

      try {
         const [result] = await connPool.query(updateSQL, [refreshToken, u_a_id]);
         if (result.affectedRows > 0) {
            return { status: true, msg: 'Refresh token updated!' };
         }
         return null;
      } catch (error) {
         console.error(`Error updating refresh token for user_auth with ID ${u_a_id}:`, error);
         return null;
      } finally {
         connPool.release();
      }
   }


   static async getUserByToken(refreshToken) {
      const connPool = await pool.getConnection();
      const selectSQL = `SELECT u_a_id AS id, u_user_id AS user_id, u_role AS role, u_isactive AS isactive FROM user_auth WHERE u_token = ?;`;

      try {
         const [rows] = await connPool.query(selectSQL, [refreshToken]);
         if (rows.length > 0) {
            return rows[0];
         }
         return null;
      } catch (error) {
         console.error(`Error retrieving user_auth by token:`, error);
         return null;
      } finally {
         connPool.release();
      }
   }

   static async deleteToken(refreshToken) {
      const connPool = await pool.getConnection();
      const updateSQL = `UPDATE user_auth SET u_token = '' WHERE u_token = ?;`;

      try {
         const [result] = await connPool.query(updateSQL, [refreshToken]);
         if (result.affectedRows > 0) {
            return { status: true, msg: 'Refresh token cleared!' };
         }
         return null;
      } catch (error) {
         console.error(`Error deleting refresh token in user_auth:`, error);
         return null;
      } finally {
         connPool.release();
      }
   }
}

module.exports = UserAuthModel;
