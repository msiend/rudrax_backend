// models/ProjectContractorModel.js
const pool = require('@/config/dbConfig');

class ProjectContractorModel {
  static async findAll() {
    const query = 'SELECT * FROM project_contractor';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query);
      return rows;
    } catch (error) {
      console.error('Error retrieving project contractors:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(pro_con_id) {
    const query = 'SELECT * FROM project_contractor WHERE pro_con_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [pro_con_id]);
      return rows[0] || null;
    } catch (error) {
      console.error(`Error retrieving contractor with ID ${pro_con_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(data) {
    const query = `INSERT INTO project_contractor (pro_con_id, pro_id, con_id, pro_phase, pro_sub_phase)
                   VALUES (?, ?, ?, ?, ?)`;
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [
        data.pro_con_id,
        data.pro_id,
        data.con_id,
        data.pro_phase,
        data.pro_sub_phase,
      ]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating project contractor:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(pro_con_id, data) {
    const query = `UPDATE project_contractor SET pro_id=?, con_id=?, pro_phase=?, pro_sub_phase=? WHERE pro_con_id=?`;
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [
        data.pro_id,
        data.con_id,
        data.pro_phase,
        data.pro_sub_phase,
        pro_con_id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating contractor with ID ${pro_con_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async delete(pro_con_id) {
    const query = 'DELETE FROM project_contractor WHERE pro_con_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [pro_con_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting contractor with ID ${pro_con_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = ProjectContractorModel;
