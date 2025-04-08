require('module-alias/register');
const express = require('express');
const coreRouter = express.Router();
const createFileUploadMiddleware = require('../middleware/fileUploader');

const uploadProject_Files = createFileUploadMiddleware({
   fieldName: 'file',
   allowedMimeTypes: ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
   uploadPath: 'public/project/files',
});
const uploadProject_Images = createFileUploadMiddleware({
   fieldName: 'image',
   allowedMimeTypes: ['image/jpeg', 'image/png'],
   uploadPath: 'public/project/images',
});
const uploadLabour_Images = createFileUploadMiddleware({
   fieldName: 'image',
   allowedMimeTypes: ['image/jpeg', 'image/png'],
   uploadPath: 'public/labour',
});

// [PROJECTS]-----------
coreRouter.post('/core/project/upload/file', uploadProject_Files, (req, res, next) => {
   res.json({
      message: 'File uploaded successfully',
      file: req.file,
   });
});
coreRouter.post('/core/project/upload/image', uploadProject_Images, (req, res, next) => {
   res.json({
      message: 'File uploaded successfully',
      file: req.file,
   });
});

coreRouter.post('/core/labour/upload', uploadLabour_Images, (req, res, next) => {
   res.json({
      message: 'File uploaded successfully',
      file: req.file,
   });
});

module.exports = coreRouter;
