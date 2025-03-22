//Hello, this is a Model for labour!
const pool = require('@/config/dbConfig');

class LaboursModel {
  constructor(lab_id, lab_name, lab_contact, lab_alt_contact, lab_address, lab_email) {
    this.lab_id = lab_id;
    this.lab_name = lab_name;
    this.lab_contact = lab_contact;
    this.lab_alt_contact = lab_alt_contact;
    this.lab_address = lab_address;
    this.lab_email = lab_email;
  }

  static async findAll() {
    const query = 'SELECT * FROM labours';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query);
      return rows;
    } catch (error) {
      console.error('Error retrieving all labours:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(lab_id) {
    const query = 'SELECT * FROM labours WHERE lab_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [lab_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving labour with ID ${lab_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(lab_name, lab_contact, lab_alt_contact, lab_address, lab_email) {
    const query =
      'INSERT INTO labours (lab_name, lab_contact, lab_alt_contact, lab_address, lab_email) VALUES (?, ?, ?, ?, ?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [
        lab_name,
        lab_contact,
        lab_alt_contact,
        lab_address,
        lab_email,
      ]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating labour:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(lab_id, lab_name, lab_contact, lab_alt_contact, lab_address, lab_email) {
    const query =
      'UPDATE labours SET lab_name = ?, lab_contact = ?, lab_alt_contact = ?, lab_address = ?, lab_email = ? WHERE lab_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [
        lab_name,
        lab_contact,
        lab_alt_contact,
        lab_address,
        lab_email,
        lab_id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating labour with ID ${lab_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async remove(lab_id) {
    const query = 'DELETE FROM labours WHERE lab_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [lab_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting labour with ID ${lab_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = LaboursModel;
