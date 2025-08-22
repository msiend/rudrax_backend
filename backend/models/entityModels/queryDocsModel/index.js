// Hello, this is a Model for projectDocs!
const pool = require('@/config/dbConfig');

class ProjectDocsModel {
   constructor(q_doc_id, q_r_id, q_doc_url) {
      this.q_doc_id = q_doc_id;
      this.q_r_id = q_r_id;
      this.q_doc_url = q_doc_url;
   }

   static async findAll(q_r_id) {
      const query = 'SELECT q_doc_id, q_r_id, q_doc_url FROM query_docs WHERE q_r_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [q_r_id]);
         return rows;
      } catch (error) {
         console.error('Error retrieving project documents:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async findOne(q_doc_id) {
      const query = 'SELECT q_doc_id, q_r_id, q_doc_url FROM query_docs WHERE q_doc_id = ?';

      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [q_doc_id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving project document with q_doc_id ${q_doc_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async create(q_r_id, q_doc_url, q_doc_type, q_doc_name) {
      const query = 'INSERT INTO query_docs (q_r_id, q_doc_url,q_doc_type,q_doc_name) VALUES (?,?,?,?)';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [q_r_id, q_doc_url, q_doc_type, q_doc_name]);
         return result.insertId;
      } catch (error) {
         console.error('Error creating project document:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async update(id, q_r_id, q_doc_url) {
      const query = 'UPDATE query_docs SET q_r_id = ?, q_doc_url = ? WHERE q_doc_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [q_r_id, q_doc_url, id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating project document with ID ${id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   static async remove(q_doc_id) {
      const query = 'DELETE FROM query_docs WHERE q_doc_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [q_doc_id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting project document with ID ${q_doc_id}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = ProjectDocsModel;
