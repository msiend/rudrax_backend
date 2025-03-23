const collectionModel = require('@/models/entityModels/collectionModel');

class CollectionsController {
   // Fetch all collections
   static async findAll(req, res) {
      try {
         const collections = await collectionModel.findAll();
         return res.status(200).send({ status: true, msg: 'Collections retrieved successfully', data: collections });
      } catch (error) {
         console.error('Error fetching collections:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Fetch a single collection by ID
   static async findOne(req, res) {
      const { colId } = req.params;
      try {
         const collection = await collectionModel.findOne(colId);
         if (!collection) {
            return res.status(404).send({ status: false, msg: 'Collection not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Collection retrieved successfully', data: collection });
      } catch (error) {
         console.error(`Error fetching collection with ID ${colId}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Create a new collection
   static async create(req, res) {
      const { colAmount, colMode, colRemark, colDate, colProjectId } = req.body;
      if (!colAmount || !colMode || !colDate || !colProjectId) {
         return res.status(400).send({ status: false, msg: 'All required fields must be provided', data: null });
      }
      try {
         const newCollection = await collectionModel.create(colAmount, colMode, colRemark, colDate, colProjectId);
         return res.status(201).send({ status: true, msg: 'Collection created successfully', data: newCollection });
      } catch (error) {
         console.error('Error creating collection:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Update an existing collection
   static async update(req, res) {
      const { colId } = req.params;
      const { colAmount, colMode, colRemark, colDate, colProjectId } = req.body;
      if (!colAmount || !colMode || !colDate || !colProjectId) {
         return res.status(400).send({ status: false, msg: 'All required fields must be provided', data: null });
      }
      try {
         const isUpdated = await collectionModel.update(colId, colAmount, colMode, colRemark, colDate, colProjectId);
         if (!isUpdated) {
            return res.status(404).send({ status: false, msg: 'Collection not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Collection updated successfully', data: null });
      } catch (error) {
         console.error(`Error updating collection with ID ${colId}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   // Delete a collection
   static async remove(req, res) {
      const { colId } = req.params;
      try {
         const isDeleted = await collectionModel.remove(colId);
         if (!isDeleted) {
            return res.status(404).send({ status: false, msg: 'Collection not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Collection deleted successfully', data: null });
      } catch (error) {
         console.error(`Error deleting collection with ID ${colId}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
}

module.exports = CollectionsController;
