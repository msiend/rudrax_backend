const fileManagerModel = require('@/models/file_manager');

class FileManagerController {
   static async findAll(req, res) {
      try {
         const { fs_r_id } = req.body;

         if (!fs_r_id) {
            return res.status(400).json({
               status: false,
               msg: 'fs_r_id is required',
            });
         }

         const data = await fileManagerModel.findAll(fs_r_id);
         return res.status(200).json({
            status: true,
            msg: 'Project documents retrieved successfully',
            data,
         });
      } catch (error) {
         console.error('Error fetching project documents:', error);
         return res.status(500).json({
            status: false,
            msg: 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
         });
      }
   }

   static async findOne(req, res) {
      try {
         const { fs_doc_id, fs_r_id } = req.body;

         if (!fs_doc_id || !fs_r_id) {
            return res.status(400).json({
               status: false,
               msg: 'Both fs_doc_id and fs_r_id are required',
            });
         }

         const data = await fileManagerModel.findOne(fs_doc_id, fs_r_id);
         if (!data) {
            return res.status(404).json({
               status: false,
               msg: 'Project document not found',
            });
         }

         return res.status(200).json({
            status: true,
            msg: 'Project document retrieved successfully',
            data,
         });
      } catch (error) {
         console.error(`Error fetching project document:`, error);
         return res.status(500).json({
            status: false,
            msg: 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
         });
      }
   }

   static async create(req, res) {
      try {
         const { fs_r_id, fs_doc_url } = req.body;

         if (!fs_r_id || !fs_doc_url) {
            return res.status(400).json({
               status: false,
               msg: 'Both fs_r_id and fs_doc_url are required',
            });
         }

         // Validate URL format if needed
         // if (!isValidUrl(fs_doc_url)) {...}

         const docId = await fileManagerModel.create(fs_r_id, fs_doc_url);
         return res.status(201).json({
            status: true,
            msg: 'Project document added successfully',
            data: { docId },
         });
      } catch (error) {
         console.error('Error adding project document:', error);
         return res.status(500).json({
            status: false,
            msg: 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
         });
      }
   }

   static async update(req, res) {
      try {
         const { fs_doc_id, fs_r_id, fs_doc_url } = req.body;

         if (!fs_doc_id || !fs_r_id || !fs_doc_url) {
            return res.status(400).json({
               status: false,
               msg: 'fs_doc_id, fs_r_id, and fs_doc_url are all required',
            });
         }

         const updated = await fileManagerModel.update(fs_doc_id, fs_r_id, fs_doc_url);
         if (!updated) {
            return res.status(404).json({
               status: false,
               msg: 'Project document not found or no changes made',
            });
         }

         return res.status(200).json({
            status: true,
            msg: 'Project document updated successfully',
            data: { fs_doc_id },
         });
      } catch (error) {
         console.error('Error updating project document:', error);
         return res.status(500).json({
            status: false,
            msg: 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
         });
      }
   }

   static async remove(req, res) {
      try {
         const { fs_doc_id } = req.body;

         if (!fs_doc_id) {
            return res.status(400).json({
               status: false,
               msg: 'fs_doc_id is required',
            });
         }

         const deleted = await fileManagerModel.remove(fs_doc_id);
         if (!deleted) {
            return res.status(404).json({
               status: false,
               msg: 'Project document not found',
            });
         }

         return res.status(200).json({
            status: true,
            msg: 'Project document deleted successfully',
            data: { fs_doc_id },
         });
      } catch (error) {
         console.error('Error deleting project document:', error);
         return res.status(500).json({
            status: false,
            msg: 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
         });
      }
   }
}

module.exports = FileManagerController;
