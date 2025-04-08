//Hello, this is a Controller for clientDocs!
const ClientsDocsModel = require('@/models/entityModels/clientDocsModel');

class ClientsDocsController {
   // Get all client documents
   static async findAll(req, res) {
      try {
         const { cl_r_id, cl_project_id } = req.body;
         const data = await ClientsDocsModel.findAll(cl_r_id);
         return res.status(200).send({ status: true, msg: 'Client documents retrieved successfully', data });
      } catch (error) {
         console.error('Error fetching client documents:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Get a single client document by ID
   static async findOne(req, res) {
      try {
         let { cl_doc_id, cl_r_id, cl_project_id} = req.body;
         const data = await ClientsDocsModel.findOne(cl_doc_id, cl_r_id);
         if (!data) {
            return res.status(404).send({ status: false, msg: 'Client document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Client document retrieved successfully', data });
      } catch (error) {
         console.error(`Error fetching client document with cl_doc_id ${req.body.cl_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Create a new client document
   static async create(req, res) {
      try {
         const { cl_r_id, cl_doc_url, cl_project_id } = req.body;
         if (!cl_r_id || !cl_doc_url || !cl_project_id) {
            return res.status(400).send({ status: false, msg: 'Missing required fields' });
         }
         const docinfo = await ClientsDocsModel.create(cl_r_id, cl_doc_url);
         return res.status(201).send({ status: true, msg: 'Client document added successfully', data: docinfo });
      } catch (error) {
         console.error('Error adding client document:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Update an existing client document
   static async update(req, res) {
      try {
         const { cl_doc_id, cl_project_id} = req.body;
         const { cl_r_id, cl_doc_url } = req.body;
         const updated = await ClientsDocsModel.update(id, cl_r_id, cl_doc_url);

         if (!updated) {
            return res.status(404).send({ status: false, msg: 'Client document not found or no changes made' });
         }
         return res.status(200).send({ status: true, msg: 'Client document updated successfully', data: null });
      } catch (error) {
         console.error(`Error updating client document with cl_doc_id ${req.body.cl_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Delete a client document
   static async remove(req, res) {
      try {
         const { cl_doc_id } = req.body;
         const deleted = await ClientsDocsModel.remove(cl_doc_id);
         if (!deleted) {
            return res.status(404).send({ status: false, msg: 'Client document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Client document deleted successfully', data: cl_doc_id });
      } catch (error) {
         console.error(`Error deleting client document with cl_doc_id ${req.body.cl_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }
}

module.exports = ClientsDocsController;
