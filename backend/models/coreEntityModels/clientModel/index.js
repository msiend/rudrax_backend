const pool = require('@/config/dbConfig');

class ClientModel {
   constructor(clientName, clientRefNo, clientContact, clientAltContact, clientAddress, clientEmail) {
      this.clientName = clientName;
      this.clientContact = clientContact;
      this.clientRefNo = clientRefNo;
      this.clientAltContact = clientAltContact;
      this.clientAddress = clientAddress;
      this.clientEmail = clientEmail;
   }
   static async getLastClientRef() {
      const query = 'SELECT client_ref_no FROM clients ORDER BY client_id DESC LIMIT 1';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving all clients:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = ClientModel;
