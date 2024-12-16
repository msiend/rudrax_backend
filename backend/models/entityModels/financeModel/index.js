//Hello, this is a Model for finance!

const pool = require('@/config/dbConfig')

class FinanceModel {
    constructor() {

    }

    static async create(
        fdName,
        fdContact,
        fdAltContact,
        fdAddress,
        fdEmail
    ) {
        const connPool = await pool.getConnection()
        try {           
            const query = `INSERT INTO finance_dep (fd_name, fd_contact, fd_alt_contact, fd_address, fd_email) VALUES(?, ?, ?, ?, ? )`;
            const [dbresponse] = await connPool.query(query, [fdName, fdContact, fdAltContact, fdAddress, fdEmail]);

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

    static async findAll(skip, total) {
        const connPool = await pool.getConnection()
        try {           
            const query = `SELECT * FROM projects ORDER BY pro_id DESC LIMIT ?, ?`;
            const [dbresponse] = await connPool.query(query, [parseInt(skip), parseInt(total)]);

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

module.exports = FinanceModel;