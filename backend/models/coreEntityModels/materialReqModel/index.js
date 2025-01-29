//Hello, this is a Model for materialReq!

const QueryModel = require('@/models/model.demo');

const queries = new QueryModel('material_requests');

class MaterialReqModel {
  static async create(insertData) {
    const columns = [];
    const values = [];
    const marks = [];
    for (let key in insertData) {
      if (insertData.hasOwnProperty(key)) {
        columns.push(key);
        marks.push(`?`);
        values.push(insertData[key]);
      }
    }

    const dbRequest = await queries.create(marks, columns, values);
    return dbRequest;
  }

  static async findAll(dataQuery) {
    const { orderBy, limits } = dataQuery;
    const dbRequest = await queries.findAll(orderBy, limits);

    return dbRequest;
  }

  static async findOne(dataQuery) {
    const columns = [];
    const values = [];

    for (let key in dataQuery) {
      if (dataQuery.hasOwnProperty(key)) {
        columns.push(key);
        values.push(dataQuery[key]);
      }
    }
    const dbRequest = await queries.findOne(columns, values);
    return dbRequest;
  }

  static async update(setData, conditionData) {
    const columns = [];
    const values = [];
    const columnFields = [];
    const columnData = [];

    for (let key in setData) {
      if (setData.hasOwnProperty(key)) {
        columns.push(key);
        values.push(setData[key]);
      }
    }

    for (let key in conditionData) {
      if (conditionData.hasOwnProperty(key)) {
        columnFields.push(key);
        columnData.push(conditionData[key]);
      }
    }

    const dbRequest = await queries.update(columns, values, columnFields, columnData);
    return dbRequest;
  }
}

module.exports = MaterialReqModel;
