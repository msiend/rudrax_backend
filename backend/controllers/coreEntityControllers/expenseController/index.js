const ClientsModel = require('@/models/coreEntityModels/clientModel');
const expenseModel = require('@/models/entityModels/expenseModel');
const expenseCoreModel = require('@/models/coreEntityModels/expenseModel');
const vendorPaymentModel = require('@/models/entityModels/vendorPaymentModel');
const contractorPaymentModel = require('@/models/entityModels/contractorPaymentModel');

class ExpenseCoreController {
   static async findWithAllDate(req, res) {
      try {
         const expenses = await expenseCoreModel.findAllWithAll_Date();
         return res.status(200).send({ status: true, msg: 'Expenses retrieved successfully', data: expenses });
      } catch (error) {
         console.error('Error fetching expenses:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }


   
}

module.exports = ExpenseCoreController;
