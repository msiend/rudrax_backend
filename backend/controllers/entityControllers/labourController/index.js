//Hello, this is a Controller for labour!
const LaboursModel = require('@/models/entityModels/labourModel');

class LaboursController {
  // Get all labours
  static async findAll(req, res) {
    try {
      const data = await LaboursModel.findAll();
      return res.status(200).send({ status: true, msg: 'Labours retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching labours:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Get a single labour by ID
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const data = await LaboursModel.findOne(id);
      if (!data) {
        return res.status(404).send({ status: false, msg: 'Labour not found' });
      }
      return res.status(200).send({ status: true, msg: 'Labour retrieved successfully', data });
    } catch (error) {
      console.error(`Error fetching labour with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Create a new labour
  static async create(req, res) {
    try {
      const { lab_name, lab_contact, lab_alt_contact, lab_address, lab_email } = req.body;

      if (!lab_name || !lab_contact) {
        return res.status(400).send({ status: false, msg: 'Missing required fields' });
      }

      const labourId = await LaboursModel.create(lab_name, lab_contact, lab_alt_contact, lab_address, lab_email);
      return res.status(201).send({ status: true, msg: 'Labour added successfully', data: { lab_id: labourId } });
    } catch (error) {
      console.error('Error adding labour:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Update an existing labour
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { lab_name, lab_contact, lab_alt_contact, lab_address, lab_email } = req.body;
      const updated = await LaboursModel.update(id, lab_name, lab_contact, lab_alt_contact, lab_address, lab_email);

      if (!updated) {
        return res.status(404).send({ status: false, msg: 'Labour not found or no changes made' });
      }
      return res.status(200).send({ status: true, msg: 'Labour updated successfully' });
    } catch (error) {
      console.error(`Error updating labour with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Delete a labour
  static async remove(req, res) {
    try {
      const { id } = req.params;
      const deleted = await LaboursModel.remove(id);
      if (!deleted) {
        return res.status(404).send({ status: false, msg: 'Labour not found' });
      }
      return res.status(200).send({ status: true, msg: 'Labour deleted successfully' });
    } catch (error) {
      console.error(`Error deleting labour with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Paginate labours
  static async paginate(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const data = await LaboursModel.paginate(parseInt(page), parseInt(limit));
      return res.status(200).send({ status: true, msg: 'Labours retrieved successfully', data });
    } catch (error) {
      console.error('Error paginating labours:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }
}

module.exports = LaboursController;
