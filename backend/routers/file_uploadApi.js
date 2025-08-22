require('module-alias/register');
const express = require('express');
const coreRouter = express.Router();
const createFileUploadMiddleware = require('../middleware/fileUploader');
const ProjectDocsModel = require('@/models/entityModels/projectDocsModel');
const site_inspectionDocsModel = require('@/models/entityModels/site_inspectionDocsModel');
const file_managerDocsModel = require('@/models/file_manager');
const fs = require('fs');
const path = require('path');

const uploadProject_Files = createFileUploadMiddleware({
   fieldName: 'file',
   allowedMimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
   ],
   uploadPath: 'public/project/files',
});

const uploadProject_Images = createFileUploadMiddleware({
   fieldName: 'image',
   allowedMimeTypes: ['image/jpeg', 'image/png'],
   uploadPath: 'public/project/images',
});


const uploadSiteInspection_Images = createFileUploadMiddleware({
   fieldName: 'image',
   allowedMimeTypes: ['image/jpeg', 'image/png'],
   uploadPath: 'public/SiteInspection',
});


const FS_File_System_Images = createFileUploadMiddleware({
   fieldName: 'image',
   allowedMimeTypes: ['image/jpeg', 'image/png'],
   uploadPath: 'public/file_manager/images',
});

const FS_File_System_Files = createFileUploadMiddleware({
   fieldName: 'file',
   allowedMimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
   ],
   uploadPath: 'public/file_manager/files',
});




// [PROJECTS]-----------
coreRouter.post('/core/project/upload/file/:pro_r_id', uploadProject_Files, async (req, res) => {
   try {
      const { pro_r_id } = req.params;
      if (!pro_r_id) {
         return res.status(400).json({ status: false, msg: 'Missing pro_r_id' });
      }
      if (!req.file) {
         return res.status(400).json({ status: false, msg: 'File upload failed' });
      }
      const filePath = req.file.path.replace(/\\/g, '/');
      const file_name = req.file.originalname
         .replace(/\.[^/.]+$/, '')
         .replace(/[^a-zA-Z ]/g, '')
         .trim()
         .substring(0, 20);
      const insertedId = await ProjectDocsModel.create(pro_r_id, filePath, req.query.type || 'doc_file', file_name);
      return res.status(200).json({
         status: true,
         msg: 'Project File uploaded and path stored successfully',
         filePath,
         insertedId,
      });
   } catch (error) {
      console.error('Error uploading project file:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});

coreRouter.post('/core/project/upload/image/:pro_r_id', uploadProject_Images, async (req, res) => {
   try {
      const { pro_r_id } = req.params;
      if (!pro_r_id || !req.file) {
         return res.status(400).json({ status: false, msg: 'Missing required fields or image' });
      }
      const imagePath = req.file.path.replace(/\\/g, '/');
      const file_name = req.file.originalname
         .replace(/\.[^/.]+$/, '')
         .replace(/[^a-zA-Z ]/g, '')
         .trim()
         .substring(0, 20);
      const insertedId = await ProjectDocsModel.create(pro_r_id, imagePath, req.query.type || 'doc_image', file_name);
      return res.status(200).json({
         status: true,
         msg: 'Project Image uploaded and stored successfully',
         imagePath,
         insertedId,
      });
   } catch (error) {
      console.error('Error uploading project image:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});
coreRouter.delete('/core/project/file/delete/:pro_doc_id', async (req, res) => {
   try {
      const { pro_doc_id } = req.params;
      let deleted;
      if (!pro_doc_id) {
         return res.status(400).json({ status: false, msg: 'Missing pro_doc_id' });
      }
      const filePath = await ProjectDocsModel.findOne(pro_doc_id);
      if (!filePath) {
         return res.status(404).json({ status: false, msg: 'Document not found' });
      }
      const resolvedPath = path.resolve(filePath.pro_doc_url);
      if (fs.existsSync(resolvedPath)) {
         fs.unlinkSync(resolvedPath);
         deleted = await ProjectDocsModel.remove(pro_doc_id);
      }
      if (deleted) {
         return res.status(200).json({ status: true, msg: 'Project document and file deleted successfully', filePath });
      } else {
         return res.status(404).json({ status: false, msg: 'Document not found or already deleted' });
      }
   } catch (error) {
      console.error('Error deleting project document:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});

// [Site- Inspection]-----------
coreRouter.post('/core/site_inspection/upload/image/:si_id', uploadSiteInspection_Images, async (req, res) => {
   try {
      const { si_id } = req.params;
      if (!si_id) {
         return res.status(400).json({ status: false, msg: 'Missing si_id' });
      }
      if (!req.file) {
         return res.status(400).json({ status: false, msg: 'File upload failed' });
      }
      const filePath = req.file.path.replace(/\\/g, '/');
      const file_name = req.file.originalname
         .replace(/\.[^/.]+$/, '')
         .replace(/[^a-zA-Z ]/g, '')
         .trim()
         .substring(0, 20);
      const insertedId = await site_inspectionDocsModel.create(
         si_id,
         filePath,
         req.query.type || 'doc_file',
         file_name
      );
      return res.status(200).json({
         status: true,
         msg: 'Site Inspection File uploaded and path stored successfully',
         filePath,
         file_name,
         insertedId,
         file_type: req.query.type || 'site_image',
      });
   } catch (error) {
      console.error('Error uploading project file:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});

/**  @multi image uploader in not completed  */ 
coreRouter.post('/core/site_inspection/upload/images/:si_id', uploadSiteInspection_Images, async (req, res) => {
   try {
      const { si_id } = req.params;
      if (!si_id) {
         return res.status(400).json({ status: false, msg: 'Missing si_id' });
      }
      if (!req.file) {
         return res.status(400).json({ status: false, msg: 'File upload failed' });
      }
      const filePath = req.file.path.replace(/\\/g, '/');
      const file_name = req.file.originalname
         .replace(/\.[^/.]+$/, '')
         .replace(/[^a-zA-Z ]/g, '')
         .trim()
         .substring(0, 20);
      const insertedId = await site_inspectionDocsModel.create(
         si_id,
         filePath,
         req.query.type || 'doc_file',
         file_name
      );
      return res.status(200).json({
         status: true,
         msg: 'Site Inspection File uploaded and path stored successfully',
         filePath,
         file_name,
         insertedId,
         file_type: req.query.type || 'site_image',
      });
   } catch (error) {
      console.error('Error uploading project file:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});

coreRouter.delete('/core/site_inspection/delete/image/:si_doc_id', async (req, res) => {
   try {
      const { si_doc_id } = req.params;
      let deleted;
      if (!si_doc_id) {
         return res.status(400).json({ status: false, msg: 'Missing si_doc_id' });
      }
      const filePath = await site_inspectionDocsModel.findOne(si_doc_id);
      if (!filePath) {
         return res.status(404).json({ status: false, msg: 'Document not found' });
      }
      const resolvedPath = path.resolve(filePath.si_doc_url);
      if (fs.existsSync(resolvedPath)) {
         fs.unlinkSync(resolvedPath);
         deleted = await site_inspectionDocsModel.remove(si_doc_id);
      }
      if (deleted) {
         return res.status(200).json({ status: true, msg: 'Project document and file deleted successfully', filePath });
      } else {
         return res.status(404).json({ status: false, msg: 'Document not found or already deleted' });
      }
   } catch (error) {
      console.error('Error deleting project document:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});

// [FILE_MANAGER]-----------
coreRouter.post('/core/file_manager/upload/file', FS_File_System_Files, async (req, res) => {
   try {
      const { pro_r_id } = req.params;
      if (!pro_r_id) {
         return res.status(400).json({ status: false, msg: 'Missing pro_r_id' });
      }
      if (!req.file) {
         return res.status(400).json({ status: false, msg: 'File upload failed' });
      }
      const filePath = req.file.path.replace(/\\/g, '/');
      const file_name = req.file.originalname
         .replace(/\.[^/.]+$/, '')
         .replace(/[^a-zA-Z ]/g, '')
         .trim()
         .substring(0, 20);
      const insertedId = await file_managerDocsModel.create(
         pro_r_id,
         filePath,
         req.query.type || 'doc_file',
         file_name
      );
      return res.status(200).json({
         status: true,
         msg: 'Project File uploaded and path stored successfully',
         filePath,
         insertedId,
      });
   } catch (error) {
      console.error('Error uploading project file:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});

coreRouter.post('/core/file_manager/upload/image', FS_File_System_Images, async (req, res) => {
   try {
      const { pro_r_id } = req.params;
      if (!pro_r_id || !req.file) {
         return res.status(400).json({ status: false, msg: 'Missing required fields or image' });
      }
      const imagePath = req.file.path.replace(/\\/g, '/');
      const file_name = req.file.originalname
         .replace(/\.[^/.]+$/, '')
         .replace(/[^a-zA-Z ]/g, '')
         .trim()
         .substring(0, 20);
      const insertedId = await file_managerDocsModel.create(
         pro_r_id,
         imagePath,
         req.query.type || 'doc_image',
         file_name
      );
      return res.status(200).json({
         status: true,
         msg: 'Project Image uploaded and stored successfully',
         imagePath,
         insertedId,
      });
   } catch (error) {
      console.error('Error uploading project image:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});
coreRouter.delete('/core/file_manager/delete/:fs_doc_id', async (req, res) => {
   try {
      const { pro_doc_id } = req.params;
      let deleted;
      if (!pro_doc_id) {
         return res.status(400).json({ status: false, msg: 'Missing pro_doc_id' });
      }
      const filePath = await file_managerDocsModel.findOne(pro_doc_id);
      if (!filePath) {
         return res.status(404).json({ status: false, msg: 'Document not found' });
      }
      const resolvedPath = path.resolve(filePath.pro_doc_url);
      if (fs.existsSync(resolvedPath)) {
         fs.unlinkSync(resolvedPath);
         deleted = await file_managerDocsModel.remove(pro_doc_id);
      }
      if (deleted) {
         return res
            .status(200)
            .json({ status: true, msg: 'file_manager document and file deleted successfully', filePath });
      } else {
         return res.status(404).json({ status: false, msg: 'Document not found or already deleted' });
      }
   } catch (error) {
      console.error('Error deleting project document:', error);
      return res.status(500).json({ status: false, msg: 'Internal Server Error' });
   }
});

module.exports = coreRouter;
