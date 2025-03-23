// Hello, this is a Model for collections!

const pool = require('@/config/dbConfig');

class CollectionsModel {
   constructor(colAmount, colMode, colRemark, colDate, colProjectId) {
      this.colAmount = colAmount;
      this.colMode = colMode;
      this.colRemark = colRemark;
      this.colDate = colDate;
      this.colProjectId = colProjectId;
   }

   // Get all collections
   static async findAll() {
      const query = 'SELECT * FROM collections ORDER BY col_date DESC';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving all collections:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Get a single collection by ID
   static async findOne(colId) {
      const query = 'SELECT * FROM collections WHERE col_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [colId]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving collection with ID ${colId}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Create a new collection
   static async create(colAmount, colMode, colRemark, colDate, colProjectId) {
      const query = `INSERT INTO collections (col_amount, col_mode, col_remark, col_date, col_project_id) VALUES (?, ?, ?, ?, ?)`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [colAmount, colMode, colRemark, colDate, colProjectId]);
         if (result.affectedRows > 0) {
            let affectedData = {
               col_id: result.insertId,
               col_amount: colAmount,
               col_mode: colMode,
               col_remark: colRemark,
               col_date: colDate,
               col_project_id: colProjectId,
            };
            return affectedData;
         }
      } catch (error) {
         console.error('Error creating collection:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Update an existing collection
   static async update(colId, colAmount, colMode, colRemark, colDate, colProjectId) {
      const query = `UPDATE collections 
                     SET col_amount = ?, col_mode = ?, col_remark = ?, col_date = ?, col_project_id = ? 
                     WHERE col_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [colAmount, colMode, colRemark, colDate, colProjectId, colId]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating collection with ID ${colId}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }

   // Delete a collection
   static async remove(colId) {
      const query = 'DELETE FROM collections WHERE col_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [colId]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting collection with ID ${colId}:`, error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = CollectionsModel;
