require('module-alias/register');
const express = require('express');
const router = express.Router();
const FileManagerController = require('@/controllers/file_manager');
// const upload = require('@/middlewares/fileUpload'); // You'll need to create this middleware
// const auth = require('@/middlewares/auth'); // Optional authentication middleware

router.post('/create', FileManagerController.create);
router.get('/readAll', FileManagerController.findAll);
router.get('/readOne/:fs_id', FileManagerController.findOne);
router.put('/update/:fs_id', FileManagerController.update);
router.delete('/delete/:fs_id', FileManagerController.remove);

// router.get('/readAllByEntity', FileManagerController.findAll);
// router.get('/readAllByType', FileManagerController.findAll);
// router.get('/readAllByFile_key', FileManagerController.findAll);

module.exports = router;
