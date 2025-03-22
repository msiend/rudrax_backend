//Hello, this is a Model for contractor!
const pool = require('@/config/dbConfig');

class ContractorsModel {
  constructor(con_id, con_name, con_contact, con_alt_contact, con_address, con_email) {
    this.con_id = con_id;
    this.con_name = con_name;
    this.con_contact = con_contact;
    this.con_alt_contact = con_alt_contact;
    this.con_address = con_address;
    this.con_email = con_email;
  }

  static async findAll() {
    const query = 'SELECT * FROM contractors';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query);
      return rows;
    } catch (error) {
      console.error('Error retrieving all contractors:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(con_id) {
    const query = 'SELECT * FROM contractors WHERE con_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [con_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving contractor with ID ${con_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(con_name, con_contact, con_alt_contact, con_address, con_email) {
    const query =
      'INSERT INTO contractors (con_name, con_contact, con_alt_contact, con_address, con_email) VALUES (?, ?, ?, ?, ?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [
        con_name,
        con_contact,
        con_alt_contact,
        con_address,
        con_email,
      ]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating contractor:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(con_id, con_name, con_contact, con_alt_contact, con_address, con_email) {
    const query =
      'UPDATE contractors SET con_name = ?, con_contact = ?, con_alt_contact = ?, con_address = ?, con_email = ? WHERE con_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [
        con_name,
        con_contact,
        con_alt_contact,
        con_address,
        con_email,
        con_id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating contractor with ID ${con_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async remove(con_id) {
    const query = 'DELETE FROM contractors WHERE con_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [con_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting contractor with ID ${con_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = ContractorsModel;
