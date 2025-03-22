const pool = require('@/config/dbConfig');

class VendorModel {
   constructor(vendorName, vendorRefNo, vendorContact, vendorAltContact, vendorAddress, vendorEmail) {
      this.vendorName = vendorName;
      this.vendorContact = vendorContact;
      this.vendorRefNo = vendorRefNo;
      this.vendorAltContact = vendorAltContact;
      this.vendorAddress = vendorAddress;
      this.vendorEmail = vendorEmail;
   }
   static async getLastVendorRef() {
      const query = 'SELECT vendor_ref_no FROM vendors ORDER BY vendor_id DESC LIMIT 1';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
         
      } catch (error) {
         console.error('Error retrieving all vendors:', error);
         throw error;
      } finally {
         connPool.release();
      }
   }
}

module.exports = VendorModel;
