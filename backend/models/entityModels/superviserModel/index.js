//Hello, this is a Model for superviser!
const pool = require('@/config/dbConfig');

// Model for Superviser
class SuperviserModel {
   constructor() {}

   static async findAll() {
      const query = 'SELECT * FROM superviser';
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query(query);
         return rows;
      } catch (error) {
         console.error('Error fetching supervisors:', error);
      } finally {
         conn.release();
      }
   }

   static async findOne(id) {
      const query = 'SELECT * FROM superviser WHERE sup_id = ?';
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query(query, [id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error fetching supervisor with ID ${id}:`, error);
      } finally {
         conn.release();
      }
   }

   static async create(sup_name, sup_contact, sup_alt_contact, sup_address) {
      const query = 'INSERT INTO superviser (sup_name, sup_contact, sup_alt_contact, sup_address) VALUES (?, ?, ?, ?)';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [sup_name, sup_contact, sup_alt_contact, sup_address]);
         return result.insertId;
      } catch (error) {
         console.error('Error creating supervisor:', error);
      } finally {
         conn.release();
      }
   }

   static async update(id, sup_name, sup_contact, sup_alt_contact, sup_address) {
      const query =
         'UPDATE superviser SET sup_name = ?, sup_contact = ?, sup_alt_contact = ?, sup_address = ? WHERE sup_id = ?';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [sup_name, sup_contact, sup_alt_contact, sup_address, id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating supervisor with ID ${id}:`, error);
      } finally {
         conn.release();
      }
   }

   static async delete(id) {
      const query = 'DELETE FROM superviser WHERE sup_id = ?';
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, [id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting supervisor with ID ${id}:`, error);
      } finally {
         conn.release();
      }
   }
}

module.exports = SuperviserModel;
