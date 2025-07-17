const ProjectSubphaseModel = require('@/models/entityModels/project_phase_taskModel');

const ProjectSubphaseController = {
  async findAll(req, res) {
    try {
      const data = await ProjectSubphaseModel.findAll();
      res.status(200).send({ status: true, msg: 'All subphases retrieved', data });
    } catch (err) {
      res.status(500).send({ status: false, msg: 'Error retrieving subphases', data: null });
    }
  },

  async findOne(req, res) {
    try {
      const data = await ProjectSubphaseModel.findOne(req.body.pro_subphase_id);
      res.status(200).send({ status: true, msg: 'Subphase retrieved', data });
    } catch (err) {
      res.status(500).send({ status: false, msg: 'Error retrieving subphase', data: null });
    }
  },

  async create(req, res) {
    try {
      const insertId = await ProjectSubphaseModel.create(req.body);
      res.status(201).send({ status: true, msg: 'Subphase created', data: { insertId } });
    } catch (err) {
      res.status(500).send({ status: false, msg: 'Error creating subphase', data: null });
    }
  },

  async update(req, res) {
    try {
      const success = await ProjectSubphaseModel.update(req.body.pro_subphase_id, req.body);
      res.status(200).send({ status: success, msg: success ? 'Updated successfully' : 'Not found', data: null });
    } catch (err) {
      res.status(500).send({ status: false, msg: 'Error updating subphase', data: null });
    }
  },

  async remove(req, res) {
    try {
      const success = await ProjectSubphaseModel.delete(req.body.pro_subphase_id);
      res.status(200).send({ status: success, msg: success ? 'Deleted successfully' : 'Not found', data: null });
    } catch (err) {
      res.status(500).send({ status: false, msg: 'Error deleting subphase', data: null });
    }
  }
};

module.exports = ProjectSubphaseController;
