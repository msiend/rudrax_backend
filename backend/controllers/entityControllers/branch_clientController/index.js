//Hello, this is a Controller for branchClients!
const BranchClientsModel = require('@/models/entityModels/branchClientsModel');

class BranchClientsController {
  // Get all branch clients
  static async findAll(req, res) {
    try {
      const data = await BranchClientsModel.findAll();
      return res.status(200).send({ status: true, msg: 'Branch clients retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching branch clients:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Get a single branch client by ID
  static async findOne(req, res) {
    try {
      const { b_client_id } = req.body;
      const data = await BranchClientsModel.findOne(b_client_id);
      if (!data) {
        return res.status(404).send({ status: false, msg: 'Branch client not found' });
      }
      return res.status(200).send({ status: true, msg: 'Branch client retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching branch client:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Create a new branch client
  static async create(req, res) {
    try {
      const { b_r_id, b_client_name, b_client_ref_no, b_client_contact, b_client_alt_contact, b_client_address, b_client_email, b_client_housetype, b_client_rcctype, b_client_totalcost, b_client_advancepayment, b_client_sitedesc, b_client_duration, b_client_commision, b_admin_approval } = req.body;
      
      if (!b_r_id || !b_client_name || !b_client_ref_no || !b_client_contact) {
        return res.status(400).send({ status: false, msg: 'Branch ID, Client Name, Reference No, and Contact are required' });
      }
      const newId = await BranchClientsModel.create({b_r_id, b_client_name, b_client_ref_no, b_client_contact, b_client_alt_contact, b_client_address, b_client_email, b_client_housetype, b_client_rcctype, b_client_totalcost, b_client_advancepayment, b_client_sitedesc, b_client_duration, b_client_commision, b_admin_approval});
      return res.status(201).send({ status: true, msg: 'Branch client created successfully', data: { b_client_id: newId } });
    } catch (error) {
      console.error('Error creating branch client:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Update a branch client
  static async update(req, res) {
    try {
      const { b_client_id } = req.body;
      const { b_r_id, b_client_name, b_client_ref_no, b_client_contact, b_client_alt_contact, b_client_address, b_client_email, b_client_housetype, b_client_rcctype, b_client_totalcost, b_client_advancepayment, b_client_sitedesc, b_client_duration, b_client_commision, b_admin_approval } = req.body;
      
      const updated = await BranchClientsModel.update({b_client_id, b_r_id, b_client_name, b_client_ref_no, b_client_contact, b_client_alt_contact, b_client_address, b_client_email, b_client_housetype, b_client_rcctype, b_client_totalcost, b_client_advancepayment, b_client_sitedesc, b_client_duration, b_client_commision, b_admin_approval});
      
      if (!updated) {
        return res.status(404).send({ status: false, msg: 'Branch client not found or no changes made' });
      }

      return res.status(200).send({ status: true, msg: 'Branch client updated successfully' });
    } catch (error) {
      console.error('Error updating branch client:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Delete a branch client
  static async remove(req, res) {
    try {
      const { b_client_id } = req.body;
      const deleted = await BranchClientsModel.remove(b_client_id);
      if (!deleted) {
        return res.status(404).send({ status: false, msg: 'Branch client not found' });
      }
      return res.status(200).send({ status: true, msg: 'Branch client deleted successfully' });
    } catch (error) {
      console.error('Error deleting branch client:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Paginate branch clients
  static async paginate(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
    //   const data = await BranchClientsModel.paginate(parseInt(page), parseInt(limit));
      return res.status(200).send({ status: true, msg: 'Branch clients retrieved successfully', data });
    } catch (error) {
      console.error('Error paginating branch clients:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }
}

module.exports = BranchClientsController;
