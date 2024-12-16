//Hello, this is a Model for materialReq!

//Hello, this is a Model for finance!

const pool = require('@/config/dbConfig')

class MaterialReqModel {
    constructor() {

    }

    static async create(
        tableName,
        columns,
        values

    ) {
        const connPool = await pool.getConnection()
        try {           
            const query = `INSERT INTO ?? (${columns.join(', ')}) VALUES (?, ?)`;
            const [dbresponse] = await connPool.execute(query, [tableName, ...values]);

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

module.exports = MaterialReqModel;