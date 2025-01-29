//Hello, this is a Controller for clientDocs!
const ClientsDocsModel = require('@/models/entityModels/clientDocsModel');

class ClientsDocsController {
   // Get all client documents
   static async findAll(req, res) {
      try {
         const data = await ClientsDocsModel.findAll();
         return res.status(200).send({ status: true, msg: 'Client documents retrieved successfully', data });
      } catch (error) {
         console.error('Error fetching client documents:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Get a single client document by ID
   static async findOne(req, res) {
      try {
         const { id } = req.params;
         const data = await ClientsDocsModel.findOne(id);
         if (!data) {
            return res.status(404).send({ status: false, msg: 'Client document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Client document retrieved successfully', data });
      } catch (error) {
         console.error(`Error fetching client document with ID ${req.params.id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Create a new client document
   static async create(req, res) {
      try {
         const { cl_r_id, cl_doc_url } = req.body;
         if (!cl_r_id || !cl_doc_url) {
            return res.status(400).send({ status: false, msg: 'Missing required fields' });
         }

         const docId = await ClientsDocsModel.create(cl_r_id, cl_doc_url);
         return res
            .status(201)
            .send({ status: true, msg: 'Client document added successfully', data: { cl_doc_id: docId } });
      } catch (error) {
         console.error('Error adding client document:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Update an existing client document
   static async update(req, res) {
      try {
         const { id } = req.params;
         const { cl_r_id, cl_doc_url } = req.body;
         const updated = await ClientsDocsModel.update(id, cl_r_id, cl_doc_url);

         if (!updated) {
            return res.status(404).send({ status: false, msg: 'Client document not found or no changes made' });
         }
         return res.status(200).send({ status: true, msg: 'Client document updated successfully' });
      } catch (error) {
         console.error(`Error updating client document with ID ${req.params.id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Delete a client document
   static async remove(req, res) {
      try {
         const { id } = req.params;
         const deleted = await ClientsDocsModel.remove(id);
         if (!deleted) {
            return res.status(404).send({ status: false, msg: 'Client document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Client document deleted successfully' });
      } catch (error) {
         console.error(`Error deleting client document with ID ${req.params.id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Paginate client documents
   static async paginate(req, res) {
      try {
         const { page = 1, limit = 10 } = req.query;
         const data = await ClientsDocsModel.paginate(parseInt(page), parseInt(limit));
         return res.status(200).send({ status: true, msg: 'Client documents retrieved successfully', data });
      } catch (error) {
         console.error('Error paginating client documents:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }
}

module.exports = ClientsDocsController;
