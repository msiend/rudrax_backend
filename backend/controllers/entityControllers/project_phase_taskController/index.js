const ProjectTaskModel = require('@/models/entityModels/project_phase_taskModel');

const ProjectTaskController = {
   async findAll(req, res) {
      try {
         const data = await ProjectTaskModel.findAll();
         res.status(200).send({ status: true, msg: 'All tasks retrieved successfully.', data });
      } catch (err) {
         console.error('Error retrieving tasks:', err);
         res.status(500).send({ status: false, msg: 'Error retrieving tasks.', data: null });
      }
   },

   async findOne(req, res) {
      const { pt_id } = req.body;
      try {
         const data = await ProjectTaskModel.findOne(pt_id);
         res.status(200).send({ status: true, msg: 'Task retrieved successfully.', data });
      } catch (err) {
         console.error(`Error retrieving task with ID ${pt_id}:`, err);
         res.status(500).send({ status: false, msg: 'Error retrieving task.', data: null });
      }
   },

   async create(req, res) {
      try {
         const insertId = await ProjectTaskModel.create(req.body);
         res.status(201).send({ status: true, msg: 'Task created successfully.', data: { pt_id:insertId, ...req.body} });
      } catch (err) {
         console.error('Error creating task:', err);
         res.status(500).send({ status: false, msg: 'Error creating task.', data: null });
      }
   },

   async update(req, res) {
      const { pt_id } = req.body;
      try {
         const success = await ProjectTaskModel.update(pt_id, req.body);
         if (success>0) {
            res.status(200).send({ 
               status: success, 
               msg: success ? 'Task updated successfully.' : 'Task not found.', 
               data: req.body
            });
         }
      } catch (err) {
         console.error(`Error updating task with ID ${pt_id}:`, err);
         res.status(500).send({ status: false, msg: 'Error updating task.', data: null });
      }
   },

   async remove(req, res) {
      const { pt_id } = req.body;
      try {
         const result = await ProjectTaskModel.remove(pt_id);
         res.status(200).send({ 
            status: result.status, 
            msg: result.msg, 
            data: null 
         });
      } catch (err) {
         console.error(`Error deleting task with ID ${pt_id}:`, err);
         res.status(500).send({ status: false, msg: 'Error deleting task.', data: null });
      }
   },
};

module.exports = ProjectTaskController;
