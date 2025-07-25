//Hello, this is a Model for subPhase!
const pool = require('@/config/dbConfig');

class SubPhasesModel {
  constructor(phase_task_id, phase_task_name, phase_task_alt_name) {
    this.phase_task_id = phase_task_id;
    this.phase_task_name = phase_task_name;
    this.phase_task_alt_name = phase_task_alt_name;
  }

  static async findAll() {
    const query = 'SELECT * FROM phase_tasks';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query);
      return rows;
    } catch (error) {
      console.error('Error retrieving all sub-phases:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(phase_task_id) {
    const query = 'SELECT * FROM phase_tasks WHERE phase_task_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [phase_task_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving sub-phase with ID ${phase_task_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(phase_task_name, phase_task_alt_name) {
    const query = 'INSERT INTO phase_tasks (phase_task_name, phase_task_alt_name) VALUES (?, ?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [phase_task_name, phase_task_alt_name]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating sub-phase:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(phase_task_id, phase_task_name, phase_task_alt_name) {
    const query = 'UPDATE phase_tasks SET phase_task_name = ?, phase_task_alt_name = ? WHERE phase_task_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [phase_task_name, phase_task_alt_name, phase_task_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating sub-phase with ID ${phase_task_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async delete(phase_task_id) {
    const query = 'DELETE FROM phase_tasks WHERE phase_task_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [phase_task_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting sub-phase with ID ${phase_task_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = SubPhasesModel;
