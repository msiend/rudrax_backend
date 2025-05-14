module.exports = {
   branch_clients: {
      sql: `
      SELECT * FROM branch_clients
      WHERE 
        b_client_name LIKE ? OR
        b_client_ref_no LIKE ? OR
        b_client_contact LIKE ? OR
        b_client_email LIKE ?
    `,
      countSql: `
      SELECT COUNT(*) AS total FROM branch_clients
      WHERE 
        b_client_name LIKE ? OR
        b_client_ref_no LIKE ? OR
        b_client_contact LIKE ? OR
        b_client_email LIKE ?
    `,
   },

   branch_data: {
      sql: `
      SELECT * FROM branch_data
      WHERE 
        b_name LIKE ? OR
        b_location LIKE ? OR
        b_contact_number LIKE ? OR
        b_email LIKE ?
    `,
      countSql: `
      SELECT COUNT(*) AS total FROM branch_data
      WHERE 
        b_name LIKE ? OR
        b_location LIKE ? OR
        b_contact_number LIKE ? OR
        b_email LIKE ?
    `,
   },
};
