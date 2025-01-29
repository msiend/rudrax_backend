//Hello, this is a Controller for particle!
const ParticlesModel = require('@/models/entityModels/particleModel');

class ParticlesController {
  // Get all particles
  static async findAll(req, res) {
    try {
      const data = await ParticlesModel.findAll();
      return res.status(200).send({ status: true, msg: 'Particles retrieved successfully', data });
    } catch (error) {
      console.error('Error fetching particles:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Get a single particle by ID
  static async findOne(req, res) {
    try {
      const { id } = req.params;
      const data = await ParticlesModel.findOne(id);
      if (!data) {
        return res.status(404).send({ status: false, msg: 'Particle not found' });
      }
      return res.status(200).send({ status: true, msg: 'Particle retrieved successfully', data });
    } catch (error) {
      console.error(`Error fetching particle with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Create a new particle
  static async create(req, res) {
    try {
      const { particle_name, particle_price } = req.body;

      if (!particle_name || !particle_price) {
        return res.status(400).send({ status: false, msg: 'Missing required fields' });
      }

      const particleId = await ParticlesModel.create(particle_name, particle_price);
      return res.status(201).send({ status: true, msg: 'Particle added successfully', data: { particle_id: particleId } });
    } catch (error) {
      console.error('Error adding particle:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Update an existing particle
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { particle_name, particle_price } = req.body;
      const updated = await ParticlesModel.update(id, particle_name, particle_price);

      if (!updated) {
        return res.status(404).send({ status: false, msg: 'Particle not found or no changes made' });
      }
      return res.status(200).send({ status: true, msg: 'Particle updated successfully' });
    } catch (error) {
      console.error(`Error updating particle with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Delete a particle
  static async remove(req, res) {
    try {
      const { id } = req.params;
      const deleted = await ParticlesModel.remove(id);
      if (!deleted) {
        return res.status(404).send({ status: false, msg: 'Particle not found' });
      }
      return res.status(200).send({ status: true, msg: 'Particle deleted successfully' });
    } catch (error) {
      console.error(`Error deleting particle with ID ${req.params.id}:`, error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }

  // Paginate particles
  static async paginate(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const data = await ParticlesModel.paginate(parseInt(page), parseInt(limit));
      return res.status(200).send({ status: true, msg: 'Particles retrieved successfully', data });
    } catch (error) {
      console.error('Error paginating particles:', error);
      return res.status(500).send({ status: false, msg: 'Internal Server Error' });
    }
  }
}

module.exports = ParticlesController;
