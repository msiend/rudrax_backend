const pool = require('@/config/dbConfig')

class QueryModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  // Insert a new uer
  async create(marks, columns, values) {
    const connPool = await pool.getConnection()
    const query = `INSERT INTO ?? (${marks.map((el) => '??').join(', ')}) VALUES (${marks.join(', ')});`;
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
  async findAll(orderBy, limits) {
    const connPool = await pool.getConnection()
    const query = `SELECT * FROM ?? ORDER BY ?? DESC LIMIT ?, ?`;
    try {
      const [rows, fields] = await connPool.query(query, [this.tableName, orderBy, ...limits]);
      return {
        status: true,
        data: rows,
        msg: 'Successfully retrived!'
      };
    } catch (error) {
      console.error('Error retrieving users:', error);
      return {
        status: false,
        msg: 'Something went wrong!',
        errMsg: error.message,
        error: error
      };
    } finally {
      connPool.release();
    }
  }

  // Retrieve a user by ID
  async findOne(columns, values) {
    const connPool = await pool.getConnection()
    const condition = columns.map((el, index) => el + '= ?' + `${index === columns.length - 1 ? ';' : ' AND'}`)
    const query = 'SELECT * FROM ?? WHERE ' + condition.join(' ');

    try {
      const [rows] = await connPool.query(query, [this.tableName, ...values]);
      return {
        status: true,
        data: rows,
        msg: 'Successfully retrived!'
      };
    } catch (error) {
      console.error(`Error retrieving user with ID :`, error);
      return {
        status: false,
        msg: 'Something went wrong!',
        errMsg: error.message,
        error: error
      };
    } finally {
      connPool.release();
    }
  }

  // Update a user's details
  async update(columns, values, conditionFields, conditionData) {
    const connPool = await pool.getConnection()
    const fields = columns.map((el, index) => 'SET ' + el + ' = ?' + `${index === columns.length - 1 ? '' : ','}`)
    const condition = conditionFields.map((el, index) => el + ' = ?' + `${index === conditionFields.length - 1 ? ';' : ' AND'}`)
    const query = `UPDATE ?? ` + fields.join(' ') + ' WHERE ' + condition.join(' ')

    try {
      await connPool.query(query, [this.tableName, ...values, ...conditionData]);
      return {
        status: true,
        msg: 'Successfully inserted!'
      };

    } catch (error) {
      console.error(`Error retrieving user with ID :`, error);
      return {
        status: false,
        msg: 'Something went wrong!',
        errMsg: error.message,
        error: error
      };
    } finally {
      connPool.release();
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
