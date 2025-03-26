const expenseModel = require('@/models/entityModels/expenseModel');

class ExpenseController {
   // Fetch all expenses
   static async findAll(req, res) {
      try {
         const expenses = await expenseModel.findAll();
         return res.status(200).send({ status: true, msg: 'Expenses retrieved successfully', data: expenses });
      } catch (error) {
         console.error('Error fetching expenses:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Fetch a single expense by ID
   static async findOne(req, res) {
      const { exp_id } = req.body;
      try {
         const expense = await expenseModel.findOne(exp_id);
         if (!expense) {
            return res.status(404).send({ status: false, msg: 'Expense not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Expense retrieved successfully', data: expense });
      } catch (error) {
         console.error(`Error fetching expense with ID ${exp_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Create a new expense
   static async create(req, res) {
      const { exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_entity, exp_project_ref } =
         req.body;
      if (!exp_amount || !exp_mode || !exp_date) {
         return res.status(400).send({ status: false, msg: 'All required fields must be provided', data: null });
      }
      try {
         const newExpense = await expenseModel.create(
            exp_name,
            exp_amount,
            exp_mode,
            exp_remark,
            exp_date,
            exp_category,
            exp_entity,
            exp_project_ref
         );
         return res.status(201).send({ status: true, msg: 'Expense created successfully', data: newExpense });
      } catch (error) {
         console.error('Error creating expense:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Update an existing expense
   static async update(req, res) {
      const { exp_id } = req.body;
      const { exp_name, exp_amount, exp_mode, exp_remark, exp_date, exp_category, exp_entity, exp_project_ref } =
         req.body;
      if (!exp_name || !exp_amount || !exp_mode || !exp_date || !exp_category || !exp_entity || !exp_project_ref) {
         return res.status(400).send({ status: false, msg: 'All required fields must be provided', data: null });
      }
      try {
         const isUpdated = await expenseModel.update(
            exp_id,
            exp_name,
            exp_amount,
            exp_mode,
            exp_remark,
            exp_date,
            exp_category,
            exp_entity,
            exp_project_ref
         );
         if (!isUpdated) {
            return res.status(404).send({ status: false, msg: 'Expense not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Expense updated successfully', data: null });
      } catch (error) {
         console.error(`Error updating expense with ID ${exp_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
   static async remove(req, res) {
      const { exp_id } = req.body;
      try {
         const isDeleted = await expenseModel.remove(exp_id);
         if (!isDeleted) {
            return res.status(404).send({ status: false, msg: 'Expense not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Expense deleted successfully', data: null });
      } catch (error) {
         console.error(`Error deleting expense with ID ${exp_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Paginated fetch of expenses
   static async paginate(req, res) {
      let { page, limit } = req.query;
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10;

      try {
         const paginatedData = await expenseModel.paginate(page, limit);
         return res.status(200).send({ status: true, msg: 'Expenses retrieved successfully', data: paginatedData });
      } catch (error) {
         console.error('Error fetching paginated expenses:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
}

module.exports = ExpenseController;
