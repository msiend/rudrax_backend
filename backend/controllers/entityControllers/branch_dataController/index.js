//Hello, this is a Controller for branchData!
const BranchDataModel = require('@/models/entityModels/branchDataModel');

class BranchDataController {
  // Get all branches
  static async findAll(req, res) {
    try {
      const data = await BranchDataModel.findAll();
      return res.status(200).send({ status: true, msg: 'Branches retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching branches:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Get a single branch by b_id
  static async findOne(req, res) {
    try {
      const { b_id } = req.body;
      const data = await BranchDataModel.findOne(b_id);
      if (!data) {
        return res.status(404).send({ status: false, msg: 'Branch not found' });
      }
      return res.status(200).send({ status: true, msg: 'Branch retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching branch:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Create a new branch
  static async create(req, res) {
    try {
      const { b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision } = req.body;
      if (!b_name || !b_contact_number) {
        return res.status(400).send({ status: false, msg: 'Branch Name and Contact Number are required' });
      }
      const newb_id = await BranchDataModel.create(b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision);
      return res.status(201).send({ status: true, msg: 'Branch created successfully', data: { b_id: newb_id } });
    } catch (error) {
      console.error('Error creating branch:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Update a branch
  static async update(req, res) {
    try {
      const { b_id } = req.body;
      const { b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision } = req.body;
      const updated = await BranchDataModel.update(b_id, b_name, b_location, b_head, b_contact_number, b_alt_number, b_email, b_commision);
      if (!updated) {
        return res.status(404).send({ status: false, msg: 'Branch not found or no changes made' });
      }
      return res.status(200).send({ status: true, msg: 'Branch updated successfully' });
    } catch (error) {
      console.error('Error updating branch:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Delete a branch
  static async remove(req, res) {
    try {
      const { id } = req.body;
      const deleted = await BranchDataModel.remove(id);
      if (!deleted) {
        return res.status(404).send({ status: false, msg: 'Branch not found' });
      }
      return res.status(200).send({ status: true, msg: 'Branch deleted successfully' , data: {b_id: id} });
    } catch (error) {
      console.error('Error deleting branch:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Paginate branches
  static async paginate(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
    //   const data = await BranchDataModel.paginate(parseInt(page), parseInt(limit));
      return res.status(200).send({ status: true, msg: 'Branches retrieved successfully', data });
    } catch (error) {
      console.error('Error paginating branches:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }
}

module.exports = BranchDataController;
