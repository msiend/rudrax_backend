//Hello, this is a Controller for subPhase!
const SubPhasesModel = require('@/models/entityModels/subPhaseModel');

class SubPhasesController {
   constructor() {
     this.sub_phase_name;
      this.sub_phase_alt_name;
   }
   static async findAll(req, res) {
      try {
         const subPhases = await SubPhasesModel.findAll();
         res.status(200).send({ status: true, msg: 'Sub-phases retrieved successfully', data: subPhases });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to retrieve sub-phases', data: null });
      }
   }

   static async findOne(req, res) {
      try {
         const { id } = req.body;
         const subPhase = await SubPhasesModel.findOne(id);
         if (!subPhase) return res.status(404).send({ status: false, msg: 'Sub-phase not found', data: null });
         res.status(200).send({ status: true, msg: 'Sub-phase retrieved successfully', data: subPhase });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to retrieve sub-phase', data: null });
      }
   }

   static async create(req, res) {
      try {
         const { sub_phase_name, sub_phase_alt_name } = req.body;
         const insertId = await SubPhasesModel.create(sub_phase_name, sub_phase_alt_name);
         res.status(201).send({ status: true, msg: 'Sub-phase created successfully', data: { id: insertId } });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to create sub-phase', data: null });
      }
   }

   static async update(req, res) {
      try {
         const { id, sub_phase_name, sub_phase_alt_name} = req.body;
         const success = await SubPhasesModel.update(id, sub_phase_name, sub_phase_alt_name);
         if (!success) return res.status(404).send({ status: false, msg: 'Sub-phase not found', data: null });
         res.status(200).send({ status: true, msg: 'Sub-phase updated successfully', data: null });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to update sub-phase', data: null });
      }
   }

   static async remove(req, res) {
      try {
         const { id } = req.body;
         const success = await SubPhasesModel.delete(id);
         if (!success) return res.status(404).send({ status: false, msg: 'Sub-phase not found', data: null });
         res.status(200).send({ status: true, msg: 'Sub-phase deleted successfully', data: null });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Failed to delete sub-phase', data: null });
      }
   }
}

module.exports = SubPhasesController;
