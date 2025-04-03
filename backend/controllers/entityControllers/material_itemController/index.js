const MaterialItemModel = require('@/models/entityModels/material_itemModel');

class MaterialItemController {
   static async findAll(req, res) {
      try {
         const items = await MaterialItemModel.findAll();
         return res.status(200).send({ status: true, msg: 'Material items retrieved successfully', data: items });
      } catch (error) {
         console.error('Error fetching material items:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async findOne(req, res) {
      const { mr_item_id } = req.params;
      try {
         const item = await MaterialItemModel.findOne(mr_item_id);
         if (!item) {
            return res.status(404).send({ status: false, msg: 'Material item not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Material item retrieved successfully', data: item });
      } catch (error) {
         console.error(`Error retrieving material item with ID ${mr_item_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async create(req, res) {
      const { mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status } = req.body;
      try {
         const newItem = await MaterialItemModel.create(mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status);
         return res.status(201).send({ status: true, msg: 'Material item created successfully', data: newItem });
      } catch (error) {
         console.error('Error creating material item:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async update(req, res) {
      const { mr_item_id } = req.params;
      const { mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status } = req.body;
      try {
         const isUpdated = await MaterialItemModel.update(mr_item_id, mr_project_r_id, mr_item_name, mr_item_quantity, mr_item_amount, mr_item_date, md_approval, fd_approval, vendor_id, mr_delivery_status);
         if (!isUpdated) {
            return res.status(404).send({ status: false, msg: 'Material item not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Material item updated successfully', data: null });
      } catch (error) {
         console.error(`Error updating material item with ID ${mr_item_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async remove(req, res) {
      const { mr_item_id } = req.params;
      try {
         const isDeleted = await MaterialItemModel.remove(mr_item_id);
         if (!isDeleted) {
            return res.status(404).send({ status: false, msg: 'Material item not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Material item deleted successfully', data: null });
      } catch (error) {
         console.error(`Error deleting material item with ID ${mr_item_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
}

module.exports = MaterialItemController;
