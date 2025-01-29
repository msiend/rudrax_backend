const sqlErrorHandler = (error) => {
    console.error('SQL Error:', error.message);
     let response = {
       status: false,
       code: 500,
       msg: 'Internal Server Error. Please try again later.',
    };
     switch (error.code) {
       case 'ER_BAD_FIELD_ERROR': 
          response = {
             status: false,
             code: 400,
             msg: 'Invalid database field or query. Please check your input!',
          };
          break;
 
       case 'ER_NO_SUCH_TABLE': 
          response = {
             status: false,
             code: 400,
             msg: 'Requested table does not exist in the database!',
          };
          break;
 
       case 'ER_DUP_ENTRY': 
          response = {
             status: false,
             code: 409,
             msg: 'Duplicate entry. This record already exists!',
          };
          break;
 
       case 'ER_PARSE_ERROR': 
          response = {
             status: false,
             code: 400,
             msg: 'There is a syntax error in the SQL query!',
          };
          break;
 
       case 'ER_ACCESS_DENIED_ERROR':
          response = {
             status: false,
             code: 403,
             msg: 'Database access denied. Please check your credentials!',
          };
          break;
 
       case 'ER_ROW_IS_REFERENCED_2': 
          response = {
             status: false,
             code: 400,
             msg: 'Cannot delete or update as the row is referenced by another table!',
          };
          break;
 
       case 'ER_BAD_NULL_ERROR': 
          response = {
             status: false,
             code: 400,
             msg: 'A required field is missing. Please provide all required values!',
          };
          break;
 
       case 'ER_DATA_TOO_LONG':
          response = {
             status: false,
             code: 400,
             msg: 'Data too long for one of the fields. Please shorten your input!',
          };
          break;
 
       case 'PROTOCOL_CONNECTION_LOST': 
          response = {
             status: false,
             code: 503,
             msg: 'Database connection was lost. Please try again later.',
          };
          break;
 
       case 'ETIMEDOUT': 
          response = {
             status: false,
             code: 503,
             msg: 'Database connection timed out. Please try again later.',
          };
          break;
 
       default: 
          response = {
             status: false,
             code: 500,
             msg: 'An unexpected database error occurred.',
          };
          break;
    }
    return response;
 };
 
 module.exports = sqlErrorHandler;
 