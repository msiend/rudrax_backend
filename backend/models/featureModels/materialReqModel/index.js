//Hello, this is a Model for materialReq!

const QueryModel = require('@/models/model.demo');

const queries = new QueryModel('material_requests')

class MaterialReqModel {
    static async create(insertData) {
        const columns = [];
        const values = [];
        const marks = [];
        for (let key in insertData) {
            if (insertData.hasOwnProperty(key)) {
                columns.push(key);
                marks.push('?');
                values.push(insertData[key]);
            }
        }

        const dbRequest = await queries.create(
            columns,
            values,
            marks
        )

        return dbRequest;
    }
}



module.exports = MaterialReqModel;