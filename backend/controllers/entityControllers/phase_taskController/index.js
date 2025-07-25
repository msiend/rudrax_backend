//Hello, this is a Controller for subPhase!
const SubPhasesModel = require('@/models/entityModels/phase_taskModel');

class SubPhasesController {
   constructor() {
     this.phase_task_name;
      this.phase_task_alt_name;
   }
   static async findAll(req, res) {
      try {
         const subPhases = await SubPhasesModel.findAll();
         res.status(200).send({ status: true, msg: 'Phase Tasks retrieved successfully', data: subPhases });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to retrieve Phase Tasks', data: null });
      }
   }

   static async findOne(req, res) {
      try {
         const { id } = req.body;
         const subPhase = await SubPhasesModel.findOne(id);
         if (!subPhase) return res.status(404).send({ status: false, msg: 'Phase Task not found', data: null });
         res.status(200).send({ status: true, msg: 'Phase Task retrieved successfully', data: subPhase });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to retrieve Phase Task', data: null });
      }
   }

   static async create(req, res) {
      try {
         const { phase_task_name, phase_task_alt_name } = req.body;
         const insertId = await SubPhasesModel.create(phase_task_name, phase_task_alt_name);
         res.status(201).send({ status: true, msg: 'Phase Task created successfully', data: { id: insertId, phase_task_name } });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to create Phase Task', data: null });
      }
   }

   static async update(req, res) {
      try {
         const { id, phase_task_name, phase_task_alt_name} = req.body;
         const success = await SubPhasesModel.update(id, phase_task_name, phase_task_alt_name);
         if (!success) return res.status(404).send({ status: false, msg: 'Phase Task not found', data: null });
         res.status(200).send({ status: true, msg: 'Phase Task updated successfully', data: null });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to update Phase Task', data: null });
      }
   }

   static async remove(req, res) {
      try {
         const { id } = req.body;
         const success = await SubPhasesModel.delete(id);
         if (!success) return res.status(404).send({ status: false, msg: 'Phase Task not found', data: null });
         res.status(200).send({ status: true, msg: 'Phase Task deleted successfully', data: null });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to delete Phase Task', data: null });
      }
   }
}

module.exports = SubPhasesController;
