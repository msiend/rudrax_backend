const pool = require('@/config/dbConfig');

class InvoiceModel {
   constructor(invoiceData, invoiceItems) {
      this.invoiceData = invoiceData;
      this.invoiceItems = invoiceItems;
   }

   static async createInvoiceWithItems(invoiceData, items) {
      const conn = await pool.getConnection();
      try {
         await conn.beginTransaction();

         const invoiceQuery = `INSERT INTO invoice (invoice_no, invoice_date, payment_status, amount, gst_rate, discount, total, client_contact, client_address, client_id) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
         const [invoiceRes] = await conn.query(invoiceQuery, [
            invoiceData.invoice_no,
            invoiceData.invoice_date,
            invoiceData.payment_status,
            invoiceData.amount,
            invoiceData.gst_rate,
            invoiceData.discount,
            invoiceData.total,
            invoiceData.client_contact,
            invoiceData.client_address,
            invoiceData.client_id,
         ]);

         const invoiceId = invoiceRes.insertId;

         for (const item of items) {
            const itemQuery = `INSERT INTO invoice_items (inv_item_name, inv_item_quantity, inv_item_rate, inv_item_amount, invoice_id)
            VALUES (?, ?, ?, ?, ?)`;
            await conn.query(itemQuery, [
               item.inv_item_name,
               item.inv_item_quantity,
               item.inv_item_rate,
               item.inv_item_amount,
               invoiceId,
            ]);
         }

         await conn.commit();
         return { invoice_id: invoiceId, ...invoiceData, items };
      } catch (error) {
         await conn.rollback();
         throw error;
      } finally {
         conn.release();
      }
   }

   static async findAll() {
      const conn = await pool.getConnection();
      try {
         const [invoices] = await conn.query(`SELECT * FROM invoice ORDER BY created_at DESC`);
         return invoices;
      } finally {
         conn.release();
      }
   }

   static async findOne(id) {
      const conn = await pool.getConnection();
      try {
         const [invoice] = await conn.query(`SELECT * FROM invoice WHERE invoice_id = ?`, [id]);
         const [items] = await conn.query(`SELECT * FROM invoice_items WHERE invoice_id = ?`, [id]);
         return { ...invoice[0], items };
      } finally {
         conn.release();
      }
   }

   static async update(invoiceId, invoiceData) {
      const query = `UPDATE invoice SET invoice_no=?, invoice_date=?, payment_status=?, amount=?, gst_rate=?, discount=?, total=?, client_contact=?, client_address=?, client_id=?
                     WHERE invoice_id = ?`;
      const conn = await pool.getConnection();
      try {
         const [res] = await conn.query(query, [
            invoiceData.invoice_no,
            invoiceData.invoice_date,
            invoiceData.payment_status,
            invoiceData.amount,
            invoiceData.gst_rate,
            invoiceData.discount,
            invoiceData.total,
            invoiceData.client_contact,
            invoiceData.client_address,
            invoiceData.client_id,
            invoiceId,
         ]);
         return res.affectedRows > 0;
      } finally {
         conn.release();
      }
   }

   static async remove(invoiceId) {
      const conn = await pool.getConnection();
      try {
         await conn.beginTransaction();
         await conn.query(`DELETE FROM invoice_items WHERE invoice_id = ?`, [invoiceId]);
         const [res] = await conn.query(`DELETE FROM invoice WHERE invoice_id = ?`, [invoiceId]);
         await conn.commit();
         return res.affectedRows > 0;
      } catch (err) {
         await conn.rollback();
         throw err;
      } finally {
         conn.release();
      }
   }

   static async updateInvoiceItem(invoice_item_id, data) {
      const query = `
             UPDATE invoice_items SET
        inv_item_name  = ?, inv_item_quantity = ?, inv_item_rate = ?, inv_item_amount = ?
       WHERE invoice_item_id = ?`;

      const values = [
         data.inv_item_name,
         data.inv_item_quantity,
         data.inv_item_rate,
         data.inv_item_amount,
         invoice_item_id,
      ];

      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query(query, values);
         return result;
      } finally {
         conn.release();
      }
   }

   static async deleteInvoiceItem(invoice_item_id) {
      const conn = await pool.getConnection();
      try {
         const [result] = await conn.query('DELETE FROM invoice_items WHERE invoice_item_id = ?', [invoice_item_id]);
         return result;
      } finally {
         conn.release();
      }
   }

   // *******************************************
   //           Invoice COnfig Updator
   // *******************************************

   static async createConfig(config) {
      const query = `
         INSERT INTO invoice_config (
            invoice_prefix,
            authorize_signatory_url,
            logo_url,
            firm_address_line_one,
            firm_address_line_two,
            firm_address_line_three,
            terms_condition_one,
            terms_condition_two
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

      const values = [
         config.invoice_prefix,
         config.authorize_signatory_url,
         config.logo_url,
         config.firm_address_line_one,
         config.firm_address_line_two,
         config.firm_address_line_three,
         config.terms_condition_one,
         config.terms_condition_two,
      ];

      const conn = await pool.getConnection();
      try {
         const [res] = await conn.query(query, values);
         return { id: res.insertId, ...config };
      } finally {
         conn.release();
      }
   }

   static async getConfig() {
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query(`SELECT * FROM invoice_config LIMIT 1`);
         return rows[0] || null;
      } finally {
         conn.release();
      }
   }

   static async updateConfig(config) {
      const conn = await pool.getConnection();
      try {
         const [rows] = await conn.query(`SELECT id FROM invoice_config LIMIT 1`);
         if (rows.length === 0) return false;
         const id = rows[0].id;
         const updateQuery = `
            UPDATE invoice_config SET
               invoice_prefix = ?,
               authorize_signatory_url = ?,
               logo_url = ?,
               firm_address_line_one = ?,
               firm_address_line_two = ?,
               firm_address_line_three = ?,
               terms_condition_one = ?,
               terms_condition_two = ?
            WHERE id = ?`;

         const values = [
            config.invoice_prefix,
            config.authorize_signatory_url,
            config.logo_url,
            config.firm_address_line_one,
            config.firm_address_line_two,
            config.firm_address_line_three,
            config.terms_condition_one,
            config.terms_condition_two,
            id,
         ];
         const [result] = await conn.query(updateQuery, values);
         return result.affectedRows > 0;
      } finally {
         conn.release();
      }
   }
   static async updateInvoicePrefix(value) {
      return await this.updateSingleColumn('invoice_prefix', value);
   }

   static async updateLogoURL(value) {
      return await this.updateSingleColumn('logo_url', value);
   }

   static async updateAuthorizeSignatoryURL(value) {
      return await this.updateSingleColumn('authorize_signatory_url', value);
   }

   static async updateFirmAddressLineOne(value) {
      return await this.updateSingleColumn('firm_address_line_one', value);
   }

   static async updateFirmAddressLineTwo(value) {
      return await this.updateSingleColumn('firm_address_line_two', value);
   }

   static async updateFirmAddressLineThree(value) {
      return await this.updateSingleColumn('firm_address_line_three', value);
   }

   static async updateTermsConditionOne(value) {
      return await this.updateSingleColumn('terms_condition_one', value);
   }

   static async updateTermsConditionTwo(value) {
      return await this.updateSingleColumn('terms_condition_two', value);
   }

   static async updateSingleColumn(column, value) {
      // const id = await this.getConfigId();
      const id = 1;
      if (!id) throw new Error('No invoice config found');

      const conn = await pool.getConnection();
      try {
         const query = `UPDATE invoice_config SET \`${column}\` = ? WHERE id = ?`;
         const [res] = await conn.query(query, [value, id]);
         return res.affectedRows > 0;
      } finally {
         conn.release();
      }
   }
   static async updateMultiple(fields) {
      const conn = await pool.getConnection();
      const keys = Object.keys(fields);
      const values = Object.values(fields);
      const setClause = keys.map((key) => `${key} = ?`).join(', ');
      try {
         const [result] = await conn.query(
            `UPDATE invoice_config SET ${setClause} WHERE id = 1`,
            values
         );
         return result.affectedRows > 0;
      } finally {
         conn.release();
      }
   }
}
module.exports = InvoiceModel;
