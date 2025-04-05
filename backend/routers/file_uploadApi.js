require('module-alias/register');
const express = require('express');
const coreRouter = express.Router();
const createFileUploadMiddleware = require('../middleware/fileUploader');

const uploadPicture = createFileUploadMiddleware({
   fieldName: 'image',
   allowedMimeTypes: ['image/jpeg', 'image/png'],
   uploadPath: 'public',
});

// [PROJECTS]-----------
coreRouter.post('/core/project/upload', uploadPicture, (req, res, next) => {
   res.json({
      message: 'File uploaded successfully',
      file: req.file,
   });
});

module.exports = coreRouter;
