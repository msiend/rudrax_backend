//Hello, this is a Model for clientDocs!
const pool = require('@/config/dbConfig');

class ClientsDocsModel {
  constructor(cl_doc_id, cl_r_id, cl_doc_url) {
    this.cl_doc_id = cl_doc_id;
    this.cl_r_id = cl_r_id;
    this.cl_doc_url = cl_doc_url;
  }

  static async findAll(cl_r_id) {
    const query = 'SELECT cl_doc_id, cl_r_id, cl_doc_url FROM clients_docs WHERE cl_r_id=?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query,[cl_r_id]);
      return rows;
    } catch (error) {
      console.error('Error retrieving client documents:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(cl_doc_id, cl_r_id) {
    const query = 'SELECT cl_doc_id, cl_r_id, cl_doc_url FROM clients_docs WHERE cl_r_id = ? AND cl_doc_id=? ';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [cl_r_id,cl_doc_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving client document with cl_doc_id, cl_r_id - ${cl_doc_id, cl_r_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(cl_r_id, cl_doc_url) {
    const query = 'INSERT INTO clients_docs (cl_r_id, cl_doc_url) VALUES (?, ?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [cl_r_id, cl_doc_url]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating client document:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(id, cl_r_id, cl_doc_url) {
    const query = 'UPDATE clients_docs SET cl_r_id = ?, cl_doc_url = ? WHERE cl_doc_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [cl_r_id, cl_doc_url, id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating client document with ID ${id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async remove(cl_doc_id) {
    const query = 'DELETE FROM clients_docs WHERE cl_doc_id = ?';
    const connPool = await pool.getConnection();
    try {
    const [result] =  await connPool.query(query, [cl_doc_id]);
    return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting client document with ID ${cl_doc_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = ClientsDocsModel;
