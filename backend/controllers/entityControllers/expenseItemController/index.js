const expItemModel = require('@/models/entityModels/expenseItemModel');

class ExpItemController {
   static async findAll(req, res) {
    const { exp_ref_id } = req.body;
      try {
         const items = await expItemModel.findAll(exp_ref_id);
         return res.status(200).send({ status: true, msg: 'Expense items retrieved successfully', data: items });
      } catch (error) {
         console.error('Error fetching expense items:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async findOne(req, res) {
      const { exp_item_id } = req.body;
      try {
         const item = await expItemModel.findOne(exp_item_id);
         if (!item) {
            return res.status(404).send({ status: false, msg: 'Expense item not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Expense item retrieved successfully', data: item });
      } catch (error) {
         console.error(`Error retrieving expense item with ID ${exp_item_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async create(req, res) {
      const { exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id } = req.body;
      try {
         const newItem = await expItemModel.create(exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id);
         return res.status(201).send({ status: true, msg: 'Expense item created successfully', data: newItem });
      } catch (error) {
         console.error('Error creating expense item:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async update(req, res) {
      const { exp_item_id } = req.body;
      const { exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id } = req.body;
      try {
         const isUpdated = await expItemModel.update(exp_item_id, exp_item_name, exp_item_quantity, exp_item_rate, exp_ref_id);
         if (!isUpdated) {
            return res.status(404).send({ status: false, msg: 'Expense item not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Expense item updated successfully', data: null });
      } catch (error) {
         console.error(`Error updating expense item with ID ${exp_item_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async remove(req, res) {
      const { exp_item_id } = req.body;
      try {
         const isDeleted = await expItemModel.remove(exp_item_id);
         if (!isDeleted) {
            return res.status(404).send({ status: false, msg: 'Expense item not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Expense item deleted successfully', data: null });
      } catch (error) {
         console.error(`Error deleting expense item with ID ${exp_item_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
}

module.exports = ExpItemController;
