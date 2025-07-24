const InvoiceModel = require('@/models/invoice');
const InvoiceConfigDetails = require('@/config/invoice.cofig');

class InvoiceController {
   static async create(req, res) {
      try {
         const { invoiceData, invoice_items } = req.body;
         const created = await InvoiceModel.createInvoiceWithItems(invoiceData, invoice_items);
         res.status(201).send({ status: true, msg: 'Invoice created successfully', data: created });
      } catch (err) {
         console.error('Error creating invoice:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async findAll(req, res) {
      try {
         const data = await InvoiceModel.findAll();
         res.status(200).send({ status: true, msg: 'All invoices fetched', data });
      } catch (err) {
         console.error('Error fetching invoices:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async findOne(req, res) {
      try {
         const data = await InvoiceModel.findOne(req.params.invoice_id);
         res.status(200).send({ status: true, msg: 'Invoice fetched', data });
      } catch (err) {
         console.error('Error fetching invoice:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async update(req, res) {
      try {
         const updated = await InvoiceModel.update(req.params.invoice_id, req.body);
         res.status(200).send({ status: true, msg: updated ? 'Invoice updated' : 'No changes made', data: null });
      } catch (err) {
         console.error('Error updating invoice:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async remove(req, res) {
      try {
         const deleted = await InvoiceModel.remove(req.params.invoice_id);
         res.status(200).send({ status: true, msg: deleted ? 'Invoice deleted' : 'Invoice not found', data: null });
      } catch (err) {
         console.error('Error deleting invoice:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async updateInvoiceItem(req, res) {
      const invoice_item_id = req.params.invoice_item_id;
      try {
         const result = await InvoiceModel.updateInvoiceItem(invoice_item_id, req.body);
         res.json({ message: 'Invoice item updated successfully', result });
      } catch (err) {
         res.status(500).json({ message: 'Error updating invoice item', error: err });
      }
   }

   static async deleteInvoiceItem(req, res) {
      const invoice_item_id = req.params.invoice_item_id;
      try {
         const result = await InvoiceModel.deleteInvoiceItem(invoice_item_id);
         res.json({ message: 'Invoice item deleted successfully', result });
      } catch (err) {
         res.status(500).json({ message: 'Error deleting invoice item', error: err });
      }
   }

   // *******************************************
   //           Invoice COnfig Updator
   // *******************************************
   static async createConfig(req, res) {
      try {
         const config = await InvoiceModel.createConfig(req.body);
         res.status(201).send({ status: true, msg: 'Invoice config created', data: config });
      } catch (err) {
         console.error('Error creating invoice config:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async getConfig(req, res) {
      try {
         const data = await InvoiceModel.getConfig();
         res.status(200).send({ status: true, msg: 'Invoice config fetched', data });
      } catch (err) {
         console.error('Error fetching invoice config:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }
   static async updateConfig(req, res) {
      try {
         const updated = await InvoiceModel.updateConfig(req.body);
         res.status(200).send({
            status: true,
            msg: updated ? 'Invoice config updated' : 'No config found to update',
            data: updated? req.body: null,
         });
      } catch (err) {
         console.error('Error updating invoice config:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async updateField(req, res) {
      const { field } = req.params;
      const { value } = req.body;

      if (!field || value === undefined) {
         return res.status(400).send({ status: false, msg: 'Field or value missing' });
      }

      try {
         const updated = await InvoiceModel.updateSingleColumn(field, value);
         res.status(200).send({ status: updated, msg: updated ? 'Field updated' : 'Update failed', data: updated? {value}:null});
      } catch (err) {
         console.error('Error updating field:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }

   static async updateMultiple(req, res) {
      try {
         const updated = await InvoiceModel.updateMultiple(req.body);
         res.status(200).send({ status: updated, msg: updated ? 'Config updated' : 'No changes made',data:updated?req.body:null });
      } catch (err) {
         console.error('Error updating config:', err);
         res.status(500).send({ status: false, msg: 'Server error', data: null });
      }
   }
}

module.exports = InvoiceController;
