//Hello, this is a Model for project!

const pool = require('@/config/dbConfig')

class ProjectModel {
    constructor() {

    }

    static async create(
        projectClientRef,
        projectName,
        projectRef,
        projectHousetype,
        projectRcctype,
        projectSiteDesc,
        projectDuration,
        projectTotalcost,
        projectAdvPayment
    ) {
        const connPool = await pool.getConnection()
        try {           
            const query = `INSERT INTO projects (pro_client_r_id, pro_name, pro_ref_no, pro_housetype, pro_rcctype, pro_sitedesc, pro_duration, pro_totalcost, pro_advancepayment) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const [dbresponse] = await connPool.query(query, [projectClientRef, projectName, projectRef, projectHousetype, projectRcctype, projectSiteDesc, projectDuration, projectTotalcost, projectAdvPayment]);

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

module.exports = ProjectModel;