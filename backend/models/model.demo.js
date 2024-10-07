class AuthModel {
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // Insert a new uer
  static async create(firstName, lastName, email) {
    const insertUserSQL = `
        INSERT INTO users (first_name, last_name, email) 
        VALUES (?, ?, ?);
      `;
    try {
      const [result] = await promisePool.query(insertUserSQL, [firstName, lastName, email]);
      console.log(`User inserted with ID: ${result.insertId}`);
      return new User(result.insertId, firstName, lastName, email);
    } catch (error) {
      console.error('Error inserting user:', error);
    }
  }

  // Retrieve all users
  static async findAll() {
    const selectUsersSQL = 'SELECT * FROM users';
    try {
      const [rows] = await promisePool.query(selectUsersSQL);
      return rows.map((row) => new User(row.id, row.first_name, row.last_name, row.email));
    } catch (error) {
      console.error('Error retrieving users:', error);
    }
  }

  // Retrieve a user by ID
  static async findById(id) {
    const selectUserSQL = 'SELECT * FROM users WHERE id = ?';
    try {
      const [rows] = await promisePool.query(selectUserSQL, [id]);
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
      await promisePool.query(updateUserSQL, [this.firstName, this.lastName, this.email, this.id]);
      console.log(`User with ID ${this.id} updated successfully.`);
    } catch (error) {
      console.error(`Error updating user with ID ${this.id}:`, error);
    }
  }

  // Delete a user by ID
  static async deleteById(id) {
    const deleteUserSQL = 'DELETE FROM users WHERE id = ?';
    try {
      await promisePool.query(deleteUserSQL, [id]);
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
