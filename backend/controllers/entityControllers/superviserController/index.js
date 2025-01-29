//Hello, this is a Controller for superviser!
const SuperviserModel = require('@/models/entityModels/superviserModel');

class SuperviserController {
  static async findAll(req, res) {
    try {
      const data = await SuperviserModel.findAll();
      res.status(200).send({ status: true, msg: 'Supervisers retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching supervisers:', error);
      res.status(500).send({ status: false, msg: 'Failed to retrieve supervisers', error: error.message });
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const data = await SuperviserModel.findOne(id);
      if (!data) return res.status(404).send({ status: false, msg: 'Superviser not found', data: null });

      res.status(200).send({ status: true, msg: 'Superviser retrieved successfully', data });
    } catch (error) {
      console.error(`Error fetching superviser with ID ${req.params.id}:`, error);
      res.status(500).send({ status: false, msg: 'Failed to retrieve superviser', error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { sup_name, sup_contact, sup_alt_contact, sup_address } = req.body;
      if (!sup_name || !sup_contact) return res.status(400).send({ status: false, msg: 'Name and contact are required' });

      const insertId = await SuperviserModel.create(sup_name, sup_contact, sup_alt_contact, sup_address);
      res.status(201).send({ status: true, msg: 'Superviser created successfully', data: { id: insertId } });
    } catch (error) {
      console.error('Error creating superviser:', error);
      res.status(500).send({ status: false, msg: 'Failed to create superviser', error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { sup_name, sup_contact, sup_alt_contact, sup_address } = req.body;

      const isUpdated = await SuperviserModel.update(id, sup_name, sup_contact, sup_alt_contact, sup_address);
      if (!isUpdated) return res.status(404).send({ status: false, msg: 'Superviser not found or no changes made' });

      res.status(200).send({ status: true, msg: 'Superviser updated successfully' });
    } catch (error) {
      console.error(`Error updating superviser with ID ${req.params.id}:`, error);
      res.status(500).send({ status: false, msg: 'Failed to update superviser', error: error.message });
    }
  }

  static async remove(req, res) {
    try {
      const { id } = req.params;
      const isDeleted = await SuperviserModel.delete(id);
      if (!isDeleted) return res.status(404).send({ status: false, msg: 'Superviser not found' });

      res.status(200).send({ status: true, msg: 'Superviser deleted successfully' });
    } catch (error) {
      console.error(`Error deleting superviser with ID ${req.params.id}:`, error);
      res.status(500).send({ status: false, msg: 'Failed to delete superviser', error: error.message });
    }
  }

  static async paginate(req, res) {
    try {
      let { page, limit } = req.query;
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10;
      const offset = (page - 1) * limit;

    //   const data = await SuperviserModel.paginate(limit, offset);
      res.status(200).send({ status: true, msg: 'Supervisers retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching paginated supervisers:', error);
      res.status(500).send({ status: false, msg: 'Failed to retrieve supervisers', error: error.message });
    }
  }
}

module.exports = SuperviserController;
