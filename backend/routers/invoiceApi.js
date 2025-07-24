require('module-alias/register');
const express = require('express');
const router = express.Router();
const InvoiceController = require('@/controllers/invoice');

// Invoice Config Updater
router.get('/config', InvoiceController.getConfig);
router.post('/config/create', InvoiceController.createConfig);
router.put('/config/update', InvoiceController.updateConfig);
router.put('/config/update-field/:field', InvoiceController.updateField);
router.put('/config/update-multi', InvoiceController.updateMultiple);

// Invoice Updater
router.post('/create', InvoiceController.create);
router.get('/list', InvoiceController.findAll);
router.get('/:invoice_id', InvoiceController.findOne);
router.put('/update/:invoice_id', InvoiceController.update);
router.delete('/delete/:invoice_id', InvoiceController.remove);
router.put('/item/update/:invoice_item_id', InvoiceController.updateInvoiceItem);
router.delete('/item/delete/:invoice_item_id', InvoiceController.deleteInvoiceItem);
// router.get('/pdf/:invoice_id', InvoiceController.generatePDF);

module.exports = router;
