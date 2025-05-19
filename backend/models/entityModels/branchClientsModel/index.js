//Hello, this is a Model for branchClients!
// BranchClients.js
const pool = require('@/config/dbConfig');

class BranchClientsModel {
   constructor(
      b_client_id,
      b_r_id,
      b_client_name,
      b_client_ref_no,
      b_client_contact,
      b_client_alt_contact,
      b_client_address,
      b_client_email,
      b_client_housetype,
      b_client_rcctype,
      b_client_totalcost,
      b_client_advancepayment,
      b_client_sitedesc,
      b_client_duration,
      b_client_commision,
      b_admin_approval
   ) {
      this.b_client_id = b_client_id;
      this.b_r_id = b_r_id;
      this.b_client_name = b_client_name;
      this.b_client_ref_no = b_client_ref_no;
      this.b_client_contact = b_client_contact;
      this.b_client_alt_contact = b_client_alt_contact;
      this.b_client_address = b_client_address;
      this.b_client_email = b_client_email;
      this.b_client_housetype = b_client_housetype;
      this.b_client_rcctype = b_client_rcctype;
      this.b_client_totalcost = b_client_totalcost;
      this.b_client_advancepayment = b_client_advancepayment;
      this.b_client_sitedesc = b_client_sitedesc;
      this.b_client_duration = b_client_duration;
      this.b_client_commision = b_client_commision;
      this.b_admin_approval = b_admin_approval;
   }

   static async findAll() {
      const query = 'SELECT * FROM branch_clients ORDER BY b_client_id DESC';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query);
         return rows;
      } catch (error) {
         console.error('Error retrieving branch clients:', error);
      } finally {
         connPool.release();
      }
   }

   static async findOne(id) {
      const query = 'SELECT * FROM branch_clients WHERE b_client_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [rows] = await connPool.query(query, [id]);
         return rows.length > 0 ? rows[0] : null;
      } catch (error) {
         console.error(`Error retrieving branch client with ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }

   static async create(data) {
      const query = `INSERT INTO branch_clients (b_r_id, b_client_name, b_client_ref_no, b_client_contact, b_client_alt_contact, b_client_address, b_client_email, b_client_housetype, b_client_rcctype, b_client_totalcost, b_client_advancepayment, b_client_sitedesc, b_client_duration, b_client_commision) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [
            data.b_r_id,
            data.b_client_name,
            data.newBranch_Id,
            data.b_client_contact,
            data.b_client_alt_contact,
            data.b_client_address,
            data.b_client_email,
            data.b_client_housetype,
            data.b_client_rcctype,
            data.b_client_totalcost,
            data.b_client_advancepayment,
            data.b_client_sitedesc,
            data.b_client_duration,
            data.b_client_commision,
            data.b_admin_approval,
         ]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error('Error creating branch client:', error);
      } finally {
         connPool.release();
      }
   }

   static async update(data) {
      const query = `UPDATE branch_clients SET b_r_id = ?, b_client_name = ?, b_client_ref_no = ?, b_client_contact = ?, b_client_alt_contact = ?, b_client_address = ?, b_client_email = ?, b_client_housetype = ?, b_client_rcctype = ?, b_client_totalcost = ?, b_client_advancepayment = ?, b_client_sitedesc = ?, b_client_duration = ?, b_client_commision = ?, b_admin_approval = ? WHERE b_client_id = ?`;
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [
            data.b_r_id,
            data.b_client_name,
            data.b_client_ref_no,
            data.b_client_contact,
            data.b_client_alt_contact,
            data.b_client_address,
            data.b_client_email,
            data.b_client_housetype,
            data.b_client_rcctype,
            data.b_client_totalcost,
            data.b_client_advancepayment,
            data.b_client_sitedesc,
            data.b_client_duration,
            data.b_client_commision,
            data.b_admin_approval,
            data.b_client_id,
         ]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error updating branch client with ID ${data.b_client_id}:`, error);
      } finally {
         connPool.release();
      }
   }

   static async remove(id) {
      const query = 'DELETE FROM branch_clients WHERE b_client_id = ?';
      const connPool = await pool.getConnection();
      try {
         const [result] = await connPool.query(query, [id]);
         return result.affectedRows > 0;
      } catch (error) {
         console.error(`Error deleting branch client with ID ${id}:`, error);
      } finally {
         connPool.release();
      }
   }

}

module.exports = BranchClientsModel;
