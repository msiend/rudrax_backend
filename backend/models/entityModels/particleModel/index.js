//Hello, this is a Model for particle!
const pool = require('@/config/dbConfig');

class ParticlesModel {
  constructor(particle_id, particle_name, particle_price) {
    this.particle_id = particle_id;
    this.particle_name = particle_name;
    this.particle_price = particle_price;
  }

  static async findAll() {
    const query = 'SELECT * FROM particles';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query);
      return rows;
    } catch (error) {
      console.error('Error retrieving all particles:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async findOne(particle_id) {
    const query = 'SELECT * FROM particles WHERE particle_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [rows] = await connPool.query(query, [particle_id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error(`Error retrieving particle with ID ${particle_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async create(particle_name, particle_price) {
    const query = 'INSERT INTO particles (particle_name, particle_price) VALUES (?, ?)';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [particle_name, particle_price]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating particle:', error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async update(particle_id, particle_name, particle_price) {
    const query =
      'UPDATE particles SET particle_name = ?, particle_price = ? WHERE particle_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [particle_name, particle_price, particle_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error updating particle with ID ${particle_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }

  static async delete(particle_id) {
    const query = 'DELETE FROM particles WHERE particle_id = ?';
    const connPool = await pool.getConnection();
    try {
      const [result] = await connPool.query(query, [particle_id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error(`Error deleting particle with ID ${particle_id}:`, error);
      throw error;
    } finally {
      connPool.release();
    }
  }
}

module.exports = ParticlesModel;
