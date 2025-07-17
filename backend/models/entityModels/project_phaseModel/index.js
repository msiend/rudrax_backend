const pool = require('@/config/dbConfig');

class ProjectPhaseModel {
   static async findAll() {
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query('SELECT * FROM project_phase');
         return rows;
      } finally {
         conn.release();
      }
   }

   static async findOne(pro_phase_id) {
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query('SELECT * FROM project_phase WHERE pro_phase_id = ?', [pro_phase_id]);
         return rows[0] || null;
      } finally {
         conn.release();
      }
   }

   static async create(data) {
      const query =
         'INSERT INTO project_phase (phase_id, pro_id, pro_phase_status, pro_phase_deadline) VALUES (?, ?, ?, ?)';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [
            data.phase_id,
            data.pro_id,
            data.pro_phase_status,
            data.pro_phase_deadline,
         ]);
         return result.insertId;
      } finally {
         conn.release();
      }
   }

   static async update(pro_phase_id, data) {
      const query =
         'UPDATE project_phase SET pro_id = ?, pro_phase_status = ?, pro_phase_deadline = ? WHERE pro_phase_id = ?';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [
            data.pro_id,
            data.pro_phase_status,
            data.pro_phase_deadline,
            pro_phase_id,
         ]);
         return result.affectedRows > 0;
      } finally {
         conn.release();
      }
   }

   static async delete(pro_phase_id) {
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query('DELETE FROM project_phase WHERE pro_phase_id = ?', [pro_phase_id]);
         return result.affectedRows > 0;
      } finally {
         conn.release();
      }
   }
}

module.exports = ProjectPhaseModel;
