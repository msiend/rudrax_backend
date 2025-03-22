//Hello, this is a Controller for contractor!
const ContractorsModel = require('@/models/entityModels/contractorModel');

class ContractorsController {
  // Get all contractors
  static async findAll(req, res) {
    try {
      const data = await ContractorsModel.findAll();
      return res.status(200).send({ status: true, msg: 'Contractors retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching contractors:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Get a single contractor by con_id
  static async findOne(req, res) {
    try {
      const { con_id } = req.body;
      const data = await ContractorsModel.findOne(con_id);
      if (!data) {
        return res.status(404).send({ status: false, msg: 'Contractor not found' });
      }
      return res.status(200).send({ status: true, msg: 'Contractor retrieved successfully', data });
    } catch (error) {
      console.error(`Error fetching contractor with con_id ${req.body.con_id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Create a new contractor
  static async create(req, res) {
    try {
      const { con_name, con_contact, con_alt_contact, con_address, con_email } = req.body;

      if (!con_name || !con_contact) {
        return res.status(400).send({ status: false, msg: 'Missing required fields' });
      }

      const contractorcon_id = await ContractorsModel.create(con_name, con_contact, con_alt_contact, con_address, con_email);
      return res.status(201).send({ status: true, msg: 'Contractor added successfully', data: { con_id: contractorcon_id } });
    } catch (error) {
      console.error('Error adding contractor:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Update an existing contractor
  static async update(req, res) {
    try {
      const { con_id } = req.body;
      const { con_name, con_contact, con_alt_contact, con_address, con_email } = req.body;
      const updated = await ContractorsModel.update(con_id, con_name, con_contact, con_alt_contact, con_address, con_email);

      if (!updated) {
        return res.status(404).send({ status: false, msg: 'Contractor not found or no changes made' });
      }
      return res.status(200).send({ status: true, msg: 'Contractor updated successfully' });
    } catch (error) {
      console.error(`Error updating contractor with con_id ${req.body.con_id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Delete a contractor
  static async remove(req, res) {
    try {
      const { con_id } = req.body;
      const deleted = await ContractorsModel.remove(con_id);
      if (!deleted) {
        return res.status(404).send({ status: false, msg: 'Contractor not found' });
      }
      return res.status(200).send({ status: true, msg: 'Contractor deleted successfully' });
    } catch (error) {
      console.error(`Error deleting contractor with con_id ${req.body.con_id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Paginate contractors
  static async paginate(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const data = await ContractorsModel.paginate(parseInt(page), parseInt(limit));
      return res.status(200).send({ status: true, msg: 'Contractors retrieved successfully', data });
    } catch (error) {
      console.error('Error paginating contractors:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }
}

module.exports = ContractorsController;
