const pool = require('@/config/dbConfig');

class ProjectSubphaseModel {
  static async findAll() {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT * FROM project_subphase');
      return rows;
    } finally {
      conn.release();
    }
  }

  static async findOne(pro_subphase_id) {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT * FROM project_subphase WHERE pro_subphase_id = ?', [pro_subphase_id]);
      return rows[0] || null;
    } finally {
      conn.release();
    }
  }

  static async create(data) {
    console.log(data);
    
    const query = 'INSERT INTO project_subphase ( pro_id, pro_phase, pro_subphase, deadline) VALUES ( ?, ?, ?, ?)';
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(query, [
         data.pro_id, data.pro_phase_id, data.pro_subphase, data.deadline
      ]);
      return result.insertId;
    } finally {
      conn.release();
    }
  }

  static async update(pro_subphase_id, data) {
    const query = 'UPDATE project_subphase SET pro_id = ?, pro_phase = ?, pro_subphase = ?, deadline = ? WHERE pro_subphase_id = ?';
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(query, [
        data.pro_id, data.pro_phase_id, data.pro_subphase, data.deadline, pro_subphase_id
      ]);
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }

  static async delete(pro_subphase_id) {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query('DELETE FROM project_subphase WHERE pro_subphase_id = ?', [pro_subphase_id]);
      return result.affectedRows > 0;
    } finally {
      conn.release();
    }
  }
}

module.exports = ProjectSubphaseModel;
