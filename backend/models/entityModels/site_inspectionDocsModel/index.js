// Hello, this is a Model for projectDocs!
const pool = require('@/config/dbConfig');

class ProjectDocsModel {
  constructor(si_doc_id, si_r_id, si_doc_url) {
    this.si_doc_id = si_doc_id;
    this.si_r_id = si_r_id;
    this.si_doc_url = si_doc_url;
  }

  static async findAll(si_r_id) {
    const query = 'SELECT si_doc_id, si_r_id, si_doc_url FROM project_docs WHERE si_r_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [si_r_id]);
      return rows;
    } catch (error) {
      console.error('Error retrieving project documents:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(si_doc_id) {
    const query = 'SELECT si_doc_id, si_r_id, si_doc_url FROM project_docs WHERE si_doc_id = ?';
  
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [si_doc_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving project document with si_doc_id ${si_doc_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(si_r_id, si_doc_url,si_doc_type,si_doc_name) {
    const query = 'INSERT INTO project_docs (si_r_id, si_doc_url,si_doc_type,si_doc_name) VALUES (?, ?,?,?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [si_r_id, si_doc_url,si_doc_type,si_doc_name]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating project document:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(id, si_r_id, si_doc_url) {
    const query = 'UPDATE project_docs SET si_r_id = ?, si_doc_url = ? WHERE si_doc_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [si_r_id, si_doc_url, id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating project document with ID ${id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async remove(si_doc_id) {
    const query = 'DELETE FROM project_docs WHERE si_doc_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [si_doc_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting project document with ID ${si_doc_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = ProjectDocsModel;
