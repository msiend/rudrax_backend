module.exports = {
   branch_clients: {
      sql: `SELECT * FROM branch_clients`,
      countSql: `SELECT COUNT(*) AS total FROM branch_clients`,
   },

   branch_data: {
      sql: `SELECT * FROM branch_data`,
      countSql: `SELECT COUNT(*) AS total FROM branch_data`,
   },
   clients: {
      sql: `SELECT * FROM clients`,
      countSql: `SELECT COUNT(*) AS total FROM clients`,
   },

   expenses: {
      sql: `SELECT * FROM expenses`,
      countSql: `SELECT COUNT(*) AS total FROM expenses`,
   },

   invoice: {
      sql: `SELECT * FROM invoice`,
      countSql: `SELECT COUNT(*) AS total FROM invoice`,
   },

   material_requests: {
      sql: `SELECT * FROM material_requests`,
      countSql: `SELECT COUNT(*) AS total FROM material_requests`,
   },

   projects: {
      sql: `SELECT * FROM projects`,
      countSql: `SELECT COUNT(*) AS total FROM projects`,
   },
};
