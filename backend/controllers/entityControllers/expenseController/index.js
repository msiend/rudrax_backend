const expenseModel = require('@/models/entityModels/expenseModel');

class ExpensesController {
  // Get all expenses
  static async findAll(req, res) {
    try {
      const data = await expenseModel.findAll();
      return res.status(200).send({ status: true, msg: 'Expenses retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching expenses:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Get a single expense by ID
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const data = await expenseModel.findOne(id);
      if (!data) {
        return res.status(404).send({ status: false, msg: 'Expense not found' });
      }
      return res.status(200).send({ status: true, msg: 'Expense retrieved successfully', data });
    } catch (error) {
      console.error(`Error fetching expense with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Create a new expense
  static async create(req, res) {
    try {
      const { exp_amount, exp_mode, exp_remark, exp_date } = req.body;

      if (!exp_amount || !exp_mode || !exp_date) {
        return res.status(400).send({ status: false, msg: 'Amount, Mode, and Date are required' });
      }

      const expId = await expenseModel.create(exp_amount, exp_mode, exp_remark, exp_date);
      return res.status(201).send({ status: true, msg: 'Expense added successfully', data: { exp_id: expId } });
    } catch (error) {
      console.error('Error adding expense:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Update an existing expense
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { exp_amount, exp_mode, exp_remark, exp_date } = req.body;
      const updated = await expenseModel.update(id, exp_amount, exp_mode, exp_remark, exp_date);

      if (!updated) {
        return res.status(404).send({ status: false, msg: 'Expense not found or no changes made' });
      }
      return res.status(200).send({ status: true, msg: 'Expense updated successfully' });
    } catch (error) {
      console.error(`Error updating expense with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Delete an expense
  static async remove(req, res) {
    try {
      const { id } = req.params;
      const deleted = await expenseModel.remove(id);
      if (!deleted) {
        return res.status(404).send({ status: false, msg: 'Expense not found' });
      }
      return res.status(200).send({ status: true, msg: 'Expense deleted successfully' });
    } catch (error) {
      console.error(`Error deleting expense with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Paginate expenses
  static async paginate(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const data = await expenseModel.paginate(parseInt(page), parseInt(limit));
      return res.status(200).send({ status: true, msg: 'Expenses retrieved successfully', data });
    } catch (error) {
      console.error('Error paginating expenses:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }
}

module.exports = ExpensesController;
