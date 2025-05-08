const ClientsModel = require('@/models/coreEntityModels/clientModel');
const expenseModel = require('@/models/entityModels/expenseModel');
const expenseCoreModel = require('@/models/coreEntityModels/expenseModel');
const vendorPaymentModel = require('@/models/entityModels/vendorPaymentModel');
const contractorPaymentModel = require('@/models/entityModels/contractorPaymentModel');

class ExpenseCoreController {
   static async add_Expense_and_dist(req, res) {
      const { dateofexpense, expenseName, remarks, Amount, contractorExpenses, vendorExpenses } = req.body;

      if (!Amount || !dateofexpense) {
         return res.status(400).json({
            status: false,
            msg: 'Amount and Date of Expense are required',
            data: null,
         });
      }

      try {
         const newExpense = await expenseModel.create(expenseName, Amount, 'UPI', remarks, dateofexpense, 'Project');
         const expenseId = newExpense.exp_id;
         let contractorPayments = [];
         let vendorPayments = [];
         if (Array.isArray(contractorExpenses) && contractorExpenses.length > 0) {
            contractorPayments = await ExpenseCoreController._processContractorExpenses(expenseId, contractorExpenses);
         }
         if (Array.isArray(vendorExpenses) && vendorExpenses.length > 0) {
            vendorPayments = await ExpenseCoreController._processVendorExpenses(expenseId, vendorExpenses);
         }
         const fullResponse = {
            exp_name: newExpense.exp_name,
            exp_amount: newExpense.exp_amount,
            exp_mode: newExpense.exp_mode,
            exp_remark: newExpense.exp_remark,
            exp_date: newExpense.exp_date,
            contractor: contractorPayments,
            vendor: vendorPayments,
         };

         return res.status(201).json({
            status: true,
            msg: 'Expense & payments created successfully',
            data: fullResponse,
         });
      } catch (error) {
         console.error('Error in add_Expense_and_dist:', error);
         return res.status(500).json({
            status: false,
            msg: 'Internal Server Error',
            data: null,
         });
      }
   }
   static async _processContractorExpenses(expenseId, contractorExpenses) {
      const promises = contractorExpenses.map((exp) =>
         contractorPaymentModel.create(exp.contractor, exp.project_id, exp.amount, exp.note, expenseId, 'UPI')
      );
      return Promise.all(promises);
   }

   static async _processVendorExpenses(expenseId, vendorExpenses) {
      const promises = vendorExpenses.map((exp) =>
         vendorPaymentModel.create(exp.vendor, exp.project_id, exp.amount, exp.note, expenseId, 'UPI')
      );
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
         const getExpensedetails = await expenseCoreModel.getExpenseDetails(exp_id);
         return res.status(201).send({
            status: true,
            msg: 'Expense details retrievd successfully',
            data: { contractor: getExpensedetails[0], vendor: getExpensedetails[1] },
         });
      } catch (error) {
         console.error('Error fetching clients:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
   static async updateExpense(req, res) {
      const { exp_id, dateofexpense, expenseName, remarks, Amount,  contractorExpenses, vendorExpenses } =req.body;
      try {
         await expenseCoreModel.updateExpenseWithTransaction(
            exp_id,
            {
               exp_date: dateofexpense,
               exp_name: expenseName,
               exp_remark: remarks,
               exp_amount: Amount,
            },
            contractorExpenses,
            vendorExpenses
         );

         return res.status(200).json({ status: true, msg: 'Expense updated successfully!' });
      } catch (err) {
         console.error(err);
         return res.status(500).json({ status: false, msg: 'Failed to update expense', error: err.message });
      }
   }
}

module.exports = ExpenseCoreController;
