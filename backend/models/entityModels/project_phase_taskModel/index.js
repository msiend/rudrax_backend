const pool = require('@/config/dbConfig');

class ProjectTaskModel {
  static async findAll() {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT * FROM project_phase_task');
      return rows;
    } catch (error) {
      console.error('Error fetching project tasks:', error);
      throw error;
    } finally {
      conn.release();
    }
  }

  static async findOne(pt_id) {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT * FROM project_phase_task WHERE pt_id = ?', [pt_id]);
      return rows[0] || null;
    } catch (error) {
      console.error(`Error fetching project task with ID ${pt_id}:`, error);
      throw error;
    } finally {
      conn.release();
    }
  }

  static async create(data) {
    const query = `
      INSERT INTO project_phase_task (pro_id, pro_phase, pro_phase_task, deadline, pt_status)
      VALUES (?, ?, ?, ?, ?)
    `;
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(query, [
        data.pro_id, data.pro_phase, data.pro_phase_task, data.deadline, data.pt_status
      ]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating project task:', error);
      throw error;
    } finally {
      conn.release();
    }
  }

  static async update(pt_id, data) {
    const query = `
      UPDATE project_phase_task
      SET pro_id = ?, pro_phase = ?, pro_phase_task = ?, deadline = ?, pt_status = ?
      WHERE pt_id = ?
    `;
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query(query, [
        data.pro_id, data.pro_phase, data.pro_phase_task, data.deadline, data.pt_status, pt_id
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating project task with ID ${pt_id}:`, error);
      throw error;
    } finally {
      conn.release();
    }
  }

  static async remove(pt_id) {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.query('DELETE FROM project_phase_task WHERE pt_id = ?', [pt_id]);
      return {
        status: result.affectedRows > 0,
        msg: result.affectedRows > 0
          ? 'Project task deleted successfully.'
          : 'No project task deleted.'
      };
    } catch (error) {
      console.error(`Error deleting project task with ID ${pt_id}:`, error);
      throw error;
    } finally {
      conn.release();
    }
  }
}

module.exports = ProjectTaskModel;
