const pool = require('@/config/dbConfig');

class _UserModel {
  static getTableConfig(role) {
    const configs = {
      branch: {
        auth: 'branch_auth',
        info: 'branch_data',
        prefix: 'br',
        idField: 'br_a_id',
        relationField: 'br_r_id'
      },
      supervisor: {
        auth: 'superviser_auth',
        info: 'superviser',
        prefix: 'sup',
        idField: 'sup_a_id',
        relationField: 'sup_r_id'
      },
      super_admin: {
        auth: 'super_admin_auth',
        info: 'super_admin',
        prefix: 'su',
        idField: 'su_a_id',
        relationField: 'su_r_id'
      },
      finance: {
        auth: 'finance_dep_auth',
        info: 'finance_dep',
        prefix: 'fd',
        idField: 'fd_a_id',
        relationField: 'fd_r_id'
      }
    };
    return configs[role];
  }

  static async create(role, { r_id, email, password, ...userInfo }) {
    const { auth, info, prefix, relationField } = _UserModel.getTableConfig(role);
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();

      // 1. Create auth record
      const [authResult] = await conn.query(
        `INSERT INTO ${auth} (${relationField}, ${prefix}_email, ${prefix}_password) VALUES (?, ?, ?)`,
        [r_id, email, password]
      );

      // 2. Create info record if info table exists and data provided
      if (userInfo && Object.keys(userInfo).length > 0) {
        const infoColumns = Object.keys(userInfo).join(', ');
        const infoValues = Object.values(userInfo);
        const placeholders = Object.keys(userInfo).map(() => '?').join(', ');
        
        await conn.query(
          `INSERT INTO ${info} (${prefix}_id, ${infoColumns}) VALUES (?, ${placeholders})`,
          [authResult.insertId, ...infoValues]
        );
      }

      await conn.commit();
      return { id: authResult.insertId, email };
    } catch (error) {
      await conn.rollback();
      throw error;
    } finally {
      conn.release();
    }
  }

  static async findAll(role) {
    const { auth, info, prefix, idField } = _UserModel.getTableConfig(role);
    const conn = await pool.getConnection();
    
    try {
      let query = `SELECT ${prefix}_a_id,${prefix}_email,`;
      
      // Join with info table if it exists
      if (info) {
        query += ` i.* FROM ${auth} a LEFT JOIN ${info} i ON a.${idField} = i.${prefix}_id`;
      } else {
        query += `FROM ${auth} a`;
      }
      
      const [rows] = await conn.query(query);
      return rows;
    } finally {
      conn.release();
    }
  }

  static async findOne(role, id) {
    const { auth, info, prefix, idField } = _UserModel.getTableConfig(role);
    const conn = await pool.getConnection();
    
    try {
      let query = `SELECT ${prefix}_a_id,${prefix}_email`;
      
      if (info) {
        query += `, i.* FROM ${auth} a LEFT JOIN ${info} i ON a.${idField} = i.${prefix}_id WHERE a.${idField} = ?`;
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
      
      Object.keys(updates).forEach(key => {
        if (key === 'email' || key === 'password' || key === 'isactive') {
          authUpdates[`${prefix}_${key}`] = updates[key];
        } else {
          infoUpdates[key] = updates[key];
        }
      });

      let authAffected = 0;
      let infoAffected = 0;

      // Update auth table if needed
      if (Object.keys(authUpdates).length > 0) {
        const authSet = Object.keys(authUpdates).map(col => `${col} = ?`).join(', ');
        const [authResult] = await conn.query(
          `UPDATE ${auth} SET ${authSet} WHERE ${idField} = ?`,
          [...Object.values(authUpdates), id]
        );
        authAffected = authResult.affectedRows;
      }

      // Update info table if needed
      if (info && Object.keys(infoUpdates).length > 0) {
        const infoSet = Object.keys(infoUpdates).map(col => `${col} = ?`).join(', ');
        const [infoResult] = await conn.query(
          `UPDATE ${info} SET ${infoSet} WHERE ${prefix}_id = ?`,
          [...Object.values(infoUpdates), id]
        );
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
      const [result] = await conn.query(
        `UPDATE ${auth} SET ${prefix}_password = ? WHERE ${idField} = ?`,
        [password, id]
      );
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }

  static async toggleStatus(role, id, status) {
    const { auth, idField, prefix } = _UserModel.getTableConfig(role);
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(
        `UPDATE ${auth} SET ${prefix}_isactive = ? WHERE ${idField} = ?`,
        [status, id]
      );
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }

  static async remove(role, id) {
    const { auth, info, prefix, idField } = _UserModel.getTableConfig(role);
    const conn = await pool.getConnection();
    
    try {
      await conn.beginTransaction();

      // Delete from info table first if exists
      if (info) {
        await conn.query(`DELETE FROM ${info} WHERE ${prefix}_id = ?`, [id]);
      }

      // Then delete from auth table
      const [result] = await conn.query(`DELETE FROM ${auth} WHERE ${idField} = ?`, [id]);

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