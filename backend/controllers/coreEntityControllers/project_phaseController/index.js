const projectPhaseCoreModel = require('@/models/coreEntityModels/project_phaseModel');

class projectPhaseCoreController {
   static async updatePhaseStatus(req, res) {
      try {
         const { pro_phase_id, pro_phase_status } = req.body;
         if (!pro_phase_id || !pro_phase_status) {
            return res.status(400).json({ status: false, msg: 'pro_phase_id and pro_phase_status are required' });
         }
         const updated = await projectPhaseCoreModel.updatePhaseStatus(pro_phase_id, pro_phase_status);
         if (!updated) {
            return res.status(404).json({ status: false, msg: 'Project phase not found or status unchanged' });
         }
         return res.status(200).json({
            status: true,
            msg: 'Project phase status updated successfully',
            data: { pro_phase_id, pro_phase_status },
         });
      } catch (error) {
         console.error('Error updating project phase status:', error);
         return res.status(500).json({ status: false, msg: 'Internal Server Error' });
      }
   }
}

module.exports = projectPhaseCoreController;
