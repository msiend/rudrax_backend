//Hello, this is a Model for branchData!
// branch_data.js
const pool = require('@/config/dbConfig');

class BranchData {
  constructor(b_id, b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision) {
    this.b_id = b_id;
    this.b_name = b_name;
    this.b_location = b_location;
    this.b_head = b_head;
    this.b_contact_number = b_contact_number;
    this.b_alt_number = b_alt_number;
    this.b_email = b_email;
    this.b_commision = b_commision;
  }

  static async findAll() {
    const query = 'SELECT * FROM branch_data';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query);
      return rows;
    } catch (error) {
      console.error('Error retrieving branch data:', error);
    } finally {
      connPool.release();
    }
  }

  static async findOne(id) {
    const query = 'SELECT * FROM branch_data WHERE b_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving branch data with ID ${id}:`, error);
    } finally {
      connPool.release();
    }
  }

  static async create(b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision) {
    const query = 'INSERT INTO branch_data (b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating branch data:', error);
    } finally {
      connPool.release();
    }
  }

  static async update(id, b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision) {
    const query = 'UPDATE branch_data SET b_name = ?, b_location = ?, b_head = ?, b_contact_number = ?, b_alt_number = ?, b_email = ?, b_commision = ? WHERE b_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision, id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating branch data with ID ${id}:`, error);
    } finally {
      connPool.release();
    }
  }

  static async remove(id) {
    const query = 'DELETE FROM branch_data WHERE b_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] =await connPool.query(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting branch data with ID ${id}:`, error);
    } finally {
      connPool.release();
    }
  }
}

module.exports = BranchData;
