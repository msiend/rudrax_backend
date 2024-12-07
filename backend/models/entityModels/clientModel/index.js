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

    static async create(
        clientName,
        clientRef,
        clientContact,
        clientAltContact,
        clientAddress,
        clientEmail
    ) {
        try {
            const connPool = await pool.getConnection()
            const query = `INSERT INTO clients (client_name, client_ref_no, client_contact, client_alt_contact, client_address, client_email) VALUES(?, ?, ?, ?, ?, ?)`;
            await connPool.beginTransaction();
            const [dbresponse] = await connPool.query(query, [clientName, clientRef, clientContact, clientAltContact,  clientAddress, clientEmail]);

            if (dbresponse?.affectedRows) {
                await connPool.commit();
                return { status: true, dbresponse, msg: 'Successfully inserted!' };
            } 

            await connPool.rollback();
            return { status: false, msg: 'Something went wrong!' };

        } catch (error) {
            await connPool.rollback();
            console.error('Transaction rolled back due to error:', error);
        } finally {
            connPool.release();
        }

    }
}


module.exports = ClientModel;