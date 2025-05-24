// Hello, this is a Model for projectDocs!
const pool = require('@/config/dbConfig');

class ProjectDocsModel {
  constructor(pro_doc_id, pro_r_id, pro_doc_url) {
    this.pro_doc_id = pro_doc_id;
    this.pro_r_id = pro_r_id;
    this.pro_doc_url = pro_doc_url;
  }

  static async findAll(pro_r_id) {
    const query = 'SELECT pro_doc_id, pro_r_id, pro_doc_url FROM project_docs WHERE pro_r_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [pro_r_id]);
      return rows;
    } catch (error) {
      console.error('Error retrieving project documents:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(pro_doc_id) {
    const query = 'SELECT pro_doc_id, pro_r_id, pro_doc_url FROM project_docs WHERE pro_doc_id = ?';
  
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [pro_doc_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving project document with pro_doc_id ${pro_doc_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(pro_r_id, pro_doc_url,pro_doc_type,pro_doc_name) {
    const query = 'INSERT INTO project_docs (pro_r_id, pro_doc_url,pro_doc_type,pro_doc_name) VALUES (?, ?,?,?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [pro_r_id, pro_doc_url,pro_doc_type,pro_doc_name]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating project document:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(id, pro_r_id, pro_doc_url) {
    const query = 'UPDATE project_docs SET pro_r_id = ?, pro_doc_url = ? WHERE pro_doc_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [pro_r_id, pro_doc_url, id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating project document with ID ${id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async remove(pro_doc_id) {
    const query = 'DELETE FROM project_docs WHERE pro_doc_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [pro_doc_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting project document with ID ${pro_doc_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = ProjectDocsModel;
