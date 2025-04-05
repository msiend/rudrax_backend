const ClientsModel = require('@/models/coreEntityModels/clientModel');
const expenseModel = require('@/models/entityModels/expenseModel');
const expenseCoreModel = require('@/models/coreEntityModels/expenseModel');
const vendorPaymentModel = require('@/models/entityModels/vendorPaymentModel');
const contractorPaymentModel = require('@/models/entityModels/contractorPaymentModel');

class ExpenseCoreController {
   static async add_Expense_and_dist(req, res) {
      console.log(req.body)
      const { dateofexpense, expenseName, remarks, Amount, contractorExpenses, vendorExpenses } = req.body;
      if (!Amount || !dateofexpense) {
         return res.status(400).send({
            status: false,
            msg: 'All Fields are required',
            data: null,
         });
      }
      try {
         const newExpense = await expenseModel.create(expenseName, Amount, 'UPI', remarks, dateofexpense, 'Project');
         const expenseId = newExpense.exp_id;
         if (contractorExpenses && contractorExpenses.length > 0) {
            await ExpenseCoreController._processContractorExpenses(expenseId, contractorExpenses);
         }
         if (vendorExpenses && vendorExpenses.length > 0) {
            await ExpenseCoreController._processVendorExpenses(expenseId, vendorExpenses);
         }
         // const completeExpense = await this._getCompleteExpense(expenseId);
         return res.status(201).send({ status: true, msg: 'Expense & payments created successfully', data: newExpense });
      } catch (error) {
         console.error('Error fetching clients:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
   static async _processContractorExpenses(expenseId, contractorExpenses) {
      const promises = contractorExpenses.map((exp) => {
         return contractorPaymentModel.create(exp.contractor, exp.project_id, exp.amount, exp.note, expenseId);
      });
      return Promise.all(promises);
   }
   static async _processVendorExpenses(expenseId, vendorExpenses) {
      const promises = vendorExpenses.map((exp) => {
         return vendorPaymentModel.create(exp.vendor, exp.project_id, exp.amount, exp.note, expenseId);
      });
      return Promise.all(promises);
   }
   static async getExpenseDetails(req, res) {
      const { exp_id } = req.params;
      if (!exp_id) {
         return res.status(400).send({
            status: false,
            msg: 'All (exp_id) Fields are required',
            data: null,
         });
      }
      try {
         const getExpensedetails = await expenseCoreModel.getExpenseDetails(exp_id)
         return res.status(201).send({ status: true, msg: 'Expense details retrievd successfully', data:{contractor: getExpensedetails[0] ,vendor: getExpensedetails[1]}});
      } catch (error) {
         console.error('Error fetching clients:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }

   }
}

module.exports = ExpenseCoreController;
