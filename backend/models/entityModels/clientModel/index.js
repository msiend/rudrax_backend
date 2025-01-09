// Hello, this is a Model for client!
const pool = require('@/config/dbConfig');

class ClientModel {
  constructor(clientName, clientRef, clientContact, clientAltContact, clientAddress, clientEmail) {
    this.clientName = clientName;
    this.clientContact = clientContact;
    this.clientRef = clientRef;
    this.clientAltContact = clientAltContact;
    this.clientAddress = clientAddress;
    this.clientEmail = clientEmail;
  }

  static async create(clientName, clientRef, clientContact, clientAltContact, clientAddress, clientEmail) {
    const connPool = await pool.getConnection();
    try {
      const query = `INSERT INTO clients (client_name, client_ref_no, client_contact, client_alt_contact, client_address, client_email) VALUES(?, ?, ?, ?, ?, ?)`;
      const [dbresponse] = await connPool.query(query, [
        clientName,
        clientRef,
        clientContact,
        clientAltContact,
        clientAddress,
        clientEmail,
      ]);

      if (dbresponse?.affectedRows) {
        return { status: true, dbresponse, msg: 'Successfully inserted!' };
      }

      return { status: false, msg: 'Something went wrong!' };
    } catch (error) {
      console.error('Transaction rolled back due to error:', error);
      return { status: false, msg: 'Something went wrong!', errMsg: error.message };
    } finally {
      connPool.release();
    }
  }

  static async findAll() {
    const connPool = await pool.getConnection();
    try {
      const query = `SELECT * FROM client`;
      const [dbresponse] = await connPool.query(query);

      // if (dbresponse?.affectedRows) {
      return { status: true, data: dbresponse, msg: 'Successfully retrived!' };
      // }

      //  return { status: false, msg: 'Something went wrong!' };
    } catch (error) {
      console.error('Transaction rolled back due to error:', error);
      return { status: false, msg: 'Something went wrong!', errMsg: error.message };
    } finally {
      connPool.release();
    }
  }
}

module.exports = ClientModel;
