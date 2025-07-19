//Hello, this is a Model for subPhase!
const pool = require('@/config/dbConfig');

class SubPhasesModel {
  constructor(sub_phase_id, sub_phase_name, sub_phase_alt_name) {
    this.sub_phase_id = sub_phase_id;
    this.sub_phase_name = sub_phase_name;
    this.sub_phase_alt_name = sub_phase_alt_name;
  }

  static async findAll() {
    const query = 'SELECT * FROM sub_phases';
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

  static async findOne(sub_phase_id) {
    const query = 'SELECT * FROM sub_phases WHERE sub_phase_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [sub_phase_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving sub-phase with ID ${sub_phase_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(sub_phase_name, sub_phase_alt_name) {
    const query = 'INSERT INTO sub_phases (sub_phase_name, sub_phase_alt_name) VALUES (?, ?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [sub_phase_name, sub_phase_alt_name]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating sub-phase:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(sub_phase_id, sub_phase_name, sub_phase_alt_name) {
    const query = 'UPDATE sub_phases SET sub_phase_name = ?, sub_phase_alt_name = ? WHERE sub_phase_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [sub_phase_name, sub_phase_alt_name, sub_phase_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating sub-phase with ID ${sub_phase_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async delete(sub_phase_id) {
    const query = 'DELETE FROM sub_phases WHERE sub_phase_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [sub_phase_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting sub-phase with ID ${sub_phase_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = SubPhasesModel;
