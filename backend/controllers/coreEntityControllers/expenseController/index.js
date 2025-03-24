const ClientsModel = require('@/models/coreEntityModels/clientModel');

class ExpenseCoreController {
   static async add_Expense_and_dist(req, res) {
      try {
      } catch (error) {
         console.error('Error fetching clients:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }
}

module.exports = ExpenseCoreController;

let = {
    dateofexpense: '2025-03-16',
    expenseName: 'name sd',
    remarks: 'dfdrvds',
    Amount: 63452,
    contractorExpenses: [{ amount: 78574, client: 'Rontu kakati', contractor: 'Rontu kakati', note: '2485' }],
   vendorExpenses: [{ amount: 4574, client: 'Kankan Jyoti Nath', note: '748574', vendor: 'Mintu Sharma' }],
};
      