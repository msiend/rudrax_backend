const pool = require('@/config/dbConfig')

class QueryModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  // Insert a new uer
  async create(marks, columns, values) {
    const connPool = await pool.getConnection()
    const query = `INSERT INTO ?? (${marks.join(', ')}) VALUES (${marks.join(', ')});`;
    try {
      const [dbresponse] = await connPool.query(query, [this.tableName, ...columns, ...values]);

      if (dbresponse?.affectedRows) {
        return {
          status: true,
          dbresponse,
          msg: 'Successfully inserted!'
        };
      }

      return {
        status: false,
        msg: 'Something went wrong!'
      };

    } catch (error) {
      console.error('Transaction rolled back due to error:', error);
      return {
        status: false,
        msg: 'Something went wrong!',
        errMsg: error.message
      };

    } finally {
      connPool.release();
    }
  }

  // Retrieve all users
  async findAll() {
    const selectUsersSQL = 'SELECT * FROM users';
    try {
      const [rows] = await connPool.query(selectUsersSQL);
      return rows.map((row) => new User(row.id, row.first_name, row.last_name, row.email));
    } catch (error) {
      console.error('Error retrieving users:', error);
    }
  }

  // Retrieve a user by ID
  static async findById(id) {
    const selectUserSQL = 'SELECT * FROM users WHERE id = ?';
    try {
      const [rows] = await connPool.query(selectUserSQL, [id]);
      if (rows.length > 0) {
        const { firstName, lastName, email } = rows[0];
        return new User(id, firstName, lastName, email);
      }
      return null;
    } catch (error) {
      console.error(`Error retrieving user with ID ${id}:`, error);
    }
  }

  // Update a user's details
  async update() {
    const updateUserSQL = `
        UPDATE users 
        SET first_name = ?, last_name = ?, email = ?
        WHERE id = ?;
      `;
    try {
      await connPool.query(updateUserSQL, [this.firstName, this.lastName, this.email, this.id]);
      console.log(`User with ID ${this.id} updated successfully.`);
    } catch (error) {
      console.error(`Error updating user with ID ${this.id}:`, error);
    }
  }

  // Delete a user by ID
  static async deleteById(id) {
    const deleteUserSQL = 'DELETE FROM users WHERE id = ?';
    try {
      await connPool.query(deleteUserSQL, [id]);
      console.log(`User with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  }
}

// HOW TO USE OBJECTS
async function fn(id) {
  const e = await AuthModel.findById(id);
  if (e) {
    console.log(e);
  } else {
    console.log('not found');
  }
}

module.exports = QueryModel
