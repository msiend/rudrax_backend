const ClientsModel = require('@/models/entityModels/clientModel');

class ClientsController {
  // Get all clients
  static async findAll(req, res) {
    try {
      const data = await ClientsModel.findAll();
      return res.status(200).send({ status: true, msg: 'Clients retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching clients:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Get a single client by ID
  static async findOne(req, res) {
    try {
      const { id } = req.body;
      const data = await ClientsModel.findOne(id);
      if (!data) {
        return res.status(404).send({ status: false, msg: 'Client not found' });
      }
      return res.status(200).send({ status: true, msg: 'Client retrieved successfully', data });
    } catch (error) {
      console.error(`Error fetching client with ID ${req.body.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Create a new client
  static async create(req, res) {
    try {
      const { client_name, client_ref_no, client_contact, client_alt_contact, client_address, client_email } = req.body;
      if (!client_name || !client_ref_no || !client_contact) {
        return res.status(400).send({ status: false, msg: 'Missing required fields' });
      }
      const clientData = await ClientsModel.create(client_name, client_ref_no, client_contact, client_alt_contact, client_address, client_email);
      return res.status(201).send({ status: true, msg: 'Client created successfully', data:  clientData  });
    } catch (error) {
      console.error('Error creating client:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Update an existing client
  static async update(req, res) {
    try {
      const { client_id } = req.body;
      const { client_name, client_ref_no, client_contact, client_alt_contact, client_address, client_email } = req.body;
      const updated = await ClientsModel.update(client_id, client_name, client_ref_no, client_contact, client_alt_contact, client_address, client_email);
      if (!updated) {
        return res.status(404).send({ status: false, msg: 'Client not found or no changes made' });
      }
      return res.status(200).send({ status: true, msg: 'Client updated successfully', client: req.body });
    } catch (error) {
      console.error(`Error updating client with ID ${req.body.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Delete a client
  static async remove(req, res) {
    try {
      const { id } = req.body;
      const deleted = await ClientsModel.remove(id);
      if (!deleted) {
        return res.status(404).send({ status: false, msg: 'Client not found' });
      }
      return res.status(200).send({ status: true, msg: 'Client deleted successfully', deletedId: id });
    } catch (error) {
      console.error(`Error deleting client with ID ${req.body.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Paginate clients
  static async paginate(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
    //   const data = await ClientsModel.paginate(parseInt(page), parseInt(limit));
      return res.status(200).send({ status: true, msg: 'Clients retrieved successfully', data });
    } catch (error) {
      console.error('Error paginating clients:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }
}

module.exports = ClientsController;
