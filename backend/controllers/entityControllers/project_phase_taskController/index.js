const ProjectTaskModel = require('@/models/entityModels/project_phase_taskModel');

const ProjectTaskController = {
   async findAll(req, res) {
      try {
         const data = await ProjectTaskModel.findAll();
         res.status(200).send({ status: true, msg: 'All Tasks retrieved', data });
      } catch (err) {
         res.status(500).send({ status: false, msg: 'Error retrieving Tasks', data: null });
      }
   },

   async findOne(req, res) {
      try {
         const data = await ProjectTaskModel.findOne(req.body.pro_Task_id);
         res.status(200).send({ status: true, msg: 'Task retrieved', data });
      } catch (err) {
         res.status(500).send({ status: false, msg: 'Error retrieving Task', data: null });
      }
   },

   async create(req, res) {
      try {
         const insertId = await ProjectTaskModel.create(req.body);
         res.status(201).send({ status: true, msg: 'Task created', data: { insertId } });
      } catch (err) {
         res.status(500).send({ status: false, msg: 'Error creating Task', data: null });
      }
   },

   async update(req, res) {
      try {
         const success = await ProjectTaskModel.update(req.body.pro_Task_id, req.body);
         res.status(200).send({ status: success, msg: success ? 'Updated successfully' : 'Not found', data: null });
      } catch (err) {
         res.status(500).send({ status: false, msg: 'Error updating Task', data: null });
      }
   },

   async remove(req, res) {
      try {
         const success = await ProjectTaskModel.delete(req.body.pro_Task_id);
         res.status(200).send({ status: success, msg: success ? 'Deleted successfully' : 'Not found', data: null });
      } catch (err) {
         res.status(500).send({ status: false, msg: 'Error deleting Task', data: null });
      }
   },
};

module.exports = ProjectTaskController;
