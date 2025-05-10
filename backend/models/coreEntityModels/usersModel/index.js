const pool = require('@/config/dbConfig');

class _UserModel {
   static getTableConfig(role) {
      const configs = {
         branch: {
            auth: 'branch_auth',
            info: 'branch_data',
            prefix: 'br',
            idField: 'br_a_id',
            relationField: 'br_r_id',
         },
         supervisor: {
            auth: 'superviser_auth',
            info: 'superviser',
            prefix: 'sup',
            idField: 'sup_a_id',
            relationField: 'sup_r_id',
         },
         super_admin: {
            auth: 'super_admin_auth',
            info: 'super_admin',
            prefix: 'su',
            idField: 'su_a_id',
            relationField: 'su_r_id',
         },
         finance: {
            auth: 'finance_dep_auth',
            info: 'finance_dep',
            prefix: 'fd',
            idField: 'fd_a_id',
            relationField: 'fd_r_id',
         },
      };
      return configs[role];
   }

   static async create(role, { ...userInfo }) {
      const { auth, info, prefix, relationField } = _UserModel.getTableConfig(role);
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         // 1. First insert into info table (if data exists)
         let _user_id = userInfo.user_id ? userInfo.user_id : null;

         let infoInsertId = null;
         let infoResult = null;
         if (info && userInfo && Object.keys(userInfo).length > 0) {
            const infoColumns = Object.keys(userInfo).join(', ');
            const infoValues = Object.values(userInfo);
            const placeholders = Object.keys(userInfo)
               .map(() => '?')
               .join(', ');

            [infoResult] = await conn.query(`INSERT INTO ${info} (${infoColumns}) VALUES (${placeholders})`, [
               ...infoValues,
            ]);
            infoInsertId = infoResult.insertId;
         }

         // 2. Then insert into auth table
         const authColumns = [relationField, `${prefix}_user_id`].join(', ');

         console.log(authColumns);

         const authValues = [infoResult.insertId, _user_id];

         console.log('auth value--' + authValues);

         const placeholders = authValues.map(() => '?').join(', ');
         const [authResult] = await conn.query(
            `INSERT INTO ${auth} (${authColumns}) VALUES (${placeholders})`,
            authValues
         );
         console.log('auth value2--' + placeholders, authResult);
         await conn.commit();
         return {
            auth_id: authResult.insertId,
            [prefix+"_id"]: infoResult.insertId,
            ...userInfo,
            [prefix+"_user_id"]:_user_id,
         };
      } catch (error) {
         await conn.rollback();
         throw error;
      } finally {
         conn.release();
      }
   }

   static async findAll(role) {
      const { auth, info, prefix, idField, relationField } = _UserModel.getTableConfig(role);
      const conn = await pool.getConnection();

      try {
         let query = `SELECT ${prefix}_a_id,${prefix}_user_id ,`;

         // Join with info table if it exists
         if (info) {
            query += ` i.* FROM ${auth} a LEFT JOIN ${info} i ON a.${relationField} = i.${prefix}_id`;
         } else {
            query += `FROM ${auth} a`;
         }
         console.log(query);

         const [rows] = await conn.query(query);
         return rows;
      } finally {
         conn.release();
      }
   }

   static async findOne(role, id) {
      const { auth, info, prefix, idField, relationField } = _UserModel.getTableConfig(role);
      const conn = await pool.getConnection();
      try {
         let query = `SELECT ${prefix}_a_id,${prefix}_user_id as user_id`;
         if (info) {
            query += `, i.* FROM ${auth} a LEFT JOIN ${info} i ON a.${relationField} = i.${prefix}_id WHERE a.${idField} = ?`;
         } else {
            query += ` FROM ${auth} a WHERE a.${idField} = ?`;
         }
         const [rows] = await conn.query(query, [id]);
         return rows[0] || null;
      } finally {
         conn.release();
      }
   }

   static async update(role, id, updates) {
      const { auth, info, prefix, idField } = _UserModel.getTableConfig(role);
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();

         // Separate auth and info updates
         const authUpdates = {};
         const infoUpdates = {};

         Object.keys(updates).forEach((key) => {
            if (key === 'user_id' || key === 'password' || key === 'isactive') {
               authUpdates[`${prefix}_${key}`] = updates[key];
            } else {
               infoUpdates[key] = updates[key];
            }
         });

         let authAffected = 0;
         let infoAffected = 0;

         // Update auth table if needed
         if (Object.keys(authUpdates).length > 0) {
            const authSet = Object.keys(authUpdates)
               .map((col) => `${col} = ?`)
               .join(', ');
            const [authResult] = await conn.query(`UPDATE ${auth} SET ${authSet} WHERE ${idField} = ?`, [
               ...Object.values(authUpdates),
               id,
            ]);
            authAffected = authResult.affectedRows;
         }

         // Update info table if needed
         if (info && Object.keys(infoUpdates).length > 0) {
            const infoSet = Object.keys(infoUpdates)
               .map((col) => `${col} = ?`)
               .join(', ');
            const [infoResult] = await conn.query(`UPDATE ${info} SET ${infoSet} WHERE ${prefix}_id = ?`, [
               ...Object.values(infoUpdates),
               id,
            ]);
            infoAffected = infoResult.affectedRows;
         }

         await conn.commit();
         return authAffected > 0 || infoAffected > 0;
      } catch (error) {
         await conn.rollback();
         throw error;
      } finally {
         conn.release();
      }
   }

   // Other methods (updatePassword, toggleStatus, remove) remain similar to your original
   // but updated to use the new table config system
   static async updatePassword(role, id, password) {
      const { auth, idField, prefix } = _UserModel.getTableConfig(role);
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(`UPDATE ${auth} SET ${prefix}_password = ? WHERE ${idField} = ?`, [
            password,
            id,
         ]);
         return result.affectedRows > 0;
      } finally {
         conn.release();
      }
   }

   static async toggleStatus(role, id, status) {
      const { auth, idField, prefix } = _UserModel.getTableConfig(role);
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(`UPDATE ${auth} SET ${prefix}_isactive = ? WHERE ${idField} = ?`, [
            status,
            id,
         ]);
         return result.affectedRows > 0;
      } finally {
         conn.release();
      }
   }

   static async remove(role, id) {
      const { auth, info, prefix, idField, relationField } = _UserModel.getTableConfig(role);
      const conn = await pool.getConnection();

      try {
         await conn.beginTransaction();
         const [result] = await conn.query(`DELETE FROM ${auth} WHERE ${relationField} = ?`, [id]);
         if (info) {
            await conn.query(`DELETE FROM ${info} WHERE ${prefix}_id = ?`, [id]);
         }

         await conn.commit();
         return result.affectedRows > 0;
      } catch (error) {
         await conn.rollback();
         throw error;
      } finally {
         conn.release();
      }
   }
}

module.exports = _UserModel;
