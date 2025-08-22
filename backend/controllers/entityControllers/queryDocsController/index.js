// Hello, this is a Controller for QueryDocs!
const qteInspectionDocsModel = require('@/models/entityModels/queryDocsModel');

class qteInspectionDocsController {
   // Get all Query documents
   static async findAll(req, res) {
      try {
         const { q_r_id } = req.body;
         const data = await qteInspectionDocsModel.findAll(q_r_id);
         return res.status(200).send({ status: true, msg: 'Query documents retrieved successfully', data });
      } catch (error) {
         console.error('Error fetching Query documents:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Get a Query document by ID
   static async findOne(req, res) {
      try {
         const { q_doc_id, q_r_id } = req.body;
         const data = await qteInspectionDocsModel.findOne(q_doc_id, q_r_id);
         if (!data) {
            return res.status(404).send({ status: false, msg: 'Query document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Query document retrieved successfully', data });
      } catch (error) {
         console.error(`Error fetching Query document with q_doc_id ${req.body.q_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Create a new Query document
   static async create(req, res) {
      try {
         const { q_r_id, q_doc_url } = req.body;
         if (!q_r_id || !q_doc_url) {
            return res.status(400).send({ status: false, msg: 'Misqng required fields' });
         }
         const docId = await qteInspectionDocsModel.create(q_r_id, q_doc_url);
         return res.status(201).send({ status: true, msg: 'Query document added successfully', data: docId });
      } catch (error) {
         console.error('Error adding Query document:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Update an existing Query document
   static async update(req, res) {
      try {
         const { q_doc_id, q_r_id, q_doc_url } = req.body;
         const updated = await qteInspectionDocsModel.update(q_doc_id, q_r_id, q_doc_url);
         if (!updated) {
            return res.status(404).send({ status: false, msg: 'Query document not found or no changes made' });
         }
         return res.status(200).send({ status: true, msg: 'Query document updated successfully' });
      } catch (error) {
         console.error(`Error updating Query document with q_doc_id ${req.body.q_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Delete a Query document
   static async remove(req, res) {
      try {
         const { q_doc_id } = req.body;
         const deleted = await qteInspectionDocsModel.remove(q_doc_id);
         if (!deleted) {
            return res.status(404).send({ status: false, msg: 'Query document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Query document deleted successfully', data: q_doc_id });
      } catch (error) {
         console.error(`Error deleting Query document with q_doc_id ${req.body.q_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }
}

module.exports = qteInspectionDocsController;
