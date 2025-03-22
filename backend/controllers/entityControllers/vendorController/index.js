//Hello, this is a Controller for vendor!
const VendorsModel = require('@/models/entityModels/vendorModel');
const VendorsCorModel = require('@/models/coreEntityModels/vendorModel');

class VendorsController {
   static async findAll(req, res) {
      try {
         const vendors = await VendorsModel.findAll();
         res.status(200).send({ status: true, msg: 'Vendors retrieved successfully', data: vendors });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to retrieve vendors', data: null });
      }
   }

   static async findOne(req, res) {
      try {
         const { vendor_id } = req.body;
         const vendor = await VendorsModel.findOne(vendor_id);
         console.log(vendor);
         
         if (!vendor) return res.status(404).send({ status: false, msg: 'Vendor not found', data: null });
         res.status(200).send({ status: true, msg: 'Vendor retrieved successfully', data: vendor });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to retrieve vendor', data: null });
      }
   }

   static async create(req, res) {
      try {
         const { vendor_name, vendor_contact, vendor_alt_contact, vendor_address, vendor_email, vendor_status } =req.body;
         const data = await VendorsCorModel.getLastVendorRef();
         let newRef;
         if (data) {
            let lastNum = parseInt(data[0]['vendor_ref_no'].slice(-4));
            newRef = data[0]['vendor_ref_no'].replace(lastNum, lastNum + 1);
         } else {newRef = 'JGCV0001';}
         const result = await VendorsModel.create(
            vendor_name,
            newRef,
            vendor_contact,
            vendor_alt_contact,
            vendor_address,
            vendor_email,
            vendor_status
         );
         if (!result) {
            return res.status(500).json({
               status: false,
               msg: 'Something Went Wrong!',
               errMsg: result?.errMsg,
            });
         } else res.status(201).send({ status: true, msg: 'Vendor created successfully', data: { id: result } });
      } catch (error) {
         console.log(error);
         res.status(500).send({ status: false, msg: 'Failed to create vendor', error: error });
      }
   }

   static async update(req, res) {
      try {
         //  const { id } = req.params;
         const { vendor_id, vendor_name, vendor_contact, vendor_alt_contact, vendor_address, vendor_email, vendor_status } =
            req.body;
         const success = await VendorsModel.update(
            vendor_id,
            vendor_name,
            vendor_contact,
            vendor_alt_contact,
            vendor_address,
            vendor_email,
            vendor_status
         );
         if (!success) return res.status(404).send({ status: false, msg: 'Vendor not found', data: null });
         res.status(200).send({ status: true, msg: 'Vendor updated successfully', data: null });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to update vendor', data: null });
      }
   }

   static async remove(req, res) {
      try {
         //  const { id } = req.params;
         const { vendor_id } = req.body;
         const success = await VendorsModel.delete(vendor_id);
         if (!success) return res.status(404).send({ status: false, msg: 'Vendor not found', data: null });
         res.status(200).send({ status: true, msg: 'Vendor deleted successfully', data: {vendor_id:vendor_id} });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to delete vendor', data: null });
      }
   }

   static async paginate(req, res) {
      try {
         const { page = 1, limit = 10 } = req.query;
         const offset = (page - 1) * limit;
         const vendors = await VendorsModel.findAll();
         res.status(200).send({
            status: true,
            msg: 'Vendors retrieved successfully',
            data: { page, limit, records: vendors.slice(offset, offset + parseInt(limit)) },
         });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to paginate vendors', data: null });
      }
   }
}

module.exports = VendorsController;
