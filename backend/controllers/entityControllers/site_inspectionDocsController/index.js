// Hello, this is a Controller for projectDocs!
const siteInspectionDocsModel = require('@/models/entityModels/siteInspectionDocsModel');

class siteInspectionDocsController {
   // Get all project documents
   static async findAll(req, res) {
      try {
         const { si_r_id } = req.body;
         const data = await siteInspectionDocsModel.findAll(si_r_id);
         return res.status(200).send({ status: true, msg: 'Project documents retrieved successfully', data });
      } catch (error) {
         console.error('Error fetching project documents:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Get a single project document by ID
   static async findOne(req, res) {
      try {
         const { si_doc_id, si_r_id } = req.body;
         const data = await siteInspectionDocsModel.findOne(si_doc_id, si_r_id);
         if (!data) {
            return res.status(404).send({ status: false, msg: 'Project document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Project document retrieved successfully', data });
      } catch (error) {
         console.error(`Error fetching project document with si_doc_id ${req.body.si_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Create a new project document
   static async create(req, res) {
      try {
         const { si_r_id, si_doc_url } = req.body;
         if (!si_r_id || !si_doc_url) {
            return res.status(400).send({ status: false, msg: 'Missing required fields' });
         }
         const docId = await siteInspectionDocsModel.create(si_r_id, si_doc_url);
         return res.status(201).send({ status: true, msg: 'Project document added successfully', data: docId });
      } catch (error) {
         console.error('Error adding project document:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Update an existing project document
   static async update(req, res) {
      try {
         const { si_doc_id, si_r_id, si_doc_url } = req.body;
         const updated = await siteInspectionDocsModel.update(si_doc_id, si_r_id, si_doc_url);
         if (!updated) {
            return res.status(404).send({ status: false, msg: 'Project document not found or no changes made' });
         }
         return res.status(200).send({ status: true, msg: 'Project document updated successfully' });
      } catch (error) {
         console.error(`Error updating project document with si_doc_id ${req.body.si_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Delete a project document
   static async remove(req, res) {
      try {
         const { si_doc_id } = req.body;
         const deleted = await siteInspectionDocsModel.remove(si_doc_id);
         if (!deleted) {
            return res.status(404).send({ status: false, msg: 'Project document not found' });
         }
         return res.status(200).send({ status: true, msg: 'Project document deleted successfully', data: si_doc_id });
      } catch (error) {
         console.error(`Error deleting project document with si_doc_id ${req.body.si_doc_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }
}

module.exports = siteInspectionDocsController;
