const pool = require('@/config/dbConfig');

class _UserModel {
  static getTableByRole(role) {
    const tables = {
      branch: { auth: 'branch_auth', idField: 'br_a_id', email: 'br_email', password: 'br_password', active: 'br_isactive' },
      supervisor: { auth: 'superviser_auth', idField: 'sup_a_id', email: 'sup_email', password: 'sup_password', active: 'sup_isactive' },
      super_admin: { auth: 'super_admin_auth', idField: 'su_a_id', email: 'su_email', password: 'su_password', active: 'su_isactive' },
      finance: { auth: 'finance_dep_auth', idField: 'fd_a_id', email: 'fd_email', password: 'fd_password', active: 'fd_isactive' },
    };
    return tables[role];
  }

  static async create(role, { r_id, email, password }) {
    const { auth, email: emailCol, password: passCol } = _UserModel.getTableByRole(role);
    const query = `INSERT INTO ${auth} (${role.slice(0, 2)}_r_id, ${emailCol}, ${passCol}) VALUES (?, ?, ?)`;

    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(query, [r_id, email, password]);
      return { id: result.insertId, email };
    } finally {
      conn.release();
    }
  }

  static async findAll(role) {
    const { auth } = _UserModel.getTableByRole(role);
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(`SELECT * FROM ${auth}`);
      return rows;
    } finally {
      conn.release();
    }
  }

  static async findOne(role, id) {
    const { auth, idField } = _UserModel.getTableByRole(role);
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(`SELECT * FROM ${auth} WHERE ${idField} = ?`, [id]);
      return rows[0] || null;
    } finally {
      conn.release();
    }
  }

  static async update(role, id, { email }) {
    const { auth, idField, email: emailCol } = _UserModel.getTableByRole(role);
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(`UPDATE ${auth} SET ${emailCol} = ? WHERE ${idField} = ?`, [email, id]);
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }

  static async updatePassword(role, id, password) {
    const { auth, idField, password: passCol } = _UserModel.getTableByRole(role);
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(`UPDATE ${auth} SET ${passCol} = ? WHERE ${idField} = ?`, [password, id]);
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }

  static async toggleStatus(role, id, status) {
    const { auth, idField, active } = _UserModel.getTableByRole(role);
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(`UPDATE ${auth} SET ${active} = ? WHERE ${idField} = ?`, [status, id]);
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }

  static async remove(role, id) {
    const { auth, idField } = _UserModel.getTableByRole(role);
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(`DELETE FROM ${auth} WHERE ${idField} = ?`, [id]);
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = _UserModel;
