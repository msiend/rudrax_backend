const ProjectTaskEmpModel = require('@/models/coreEntityModels/project_task_empModel');

class ProjectTaskEmpController {
   static async updateStatus(req, res) {
      try {
         const { ptemp_id, ptemp_status } = req.body;
         if (!ptemp_id || !ptemp_status) {
            return res.status(400).json({
               status: false,
               msg: 'Missing required fields: ptemp_id and ptemp_status',
               data: null,
            });
         }

         const updated = await ProjectTaskEmpModel.updateStatus(ptemp_id, ptemp_status);
         if (!updated) {
            return res.status(404).json({
               status: false,
               msg: 'Task not found or no changes made',
               data: null,
            });
         }

         res.status(200).json({
            status: true,
            msg: 'Task status updated successfully',
            data: { id: ptemp_id, new_status: ptemp_status },
         });
      } catch (err) {
         console.error('Error updating task status:', err);
         res.status(500).json({
            status: false,
            msg: 'Internal server error while updating task status',
            data: null,
         });
      }
   }

   static async getAllByProjectId(req, res) {
      try {
         const { project_id } = req.body;
         if (!project_id) {
            return res.status(400).json({
               status: false,
               msg: 'Project ID is required',
               data: null,
            });
         }

         const tasks = await ProjectTaskEmpModel.getAllByProjectId(project_id);
         res.status(200).json({
            status: true,
            msg: tasks.length ? 'Tasks retrieved successfully' : 'No tasks found for this project',
            data: tasks,
         });
      } catch (err) {
         console.error('Error fetching tasks by project:', err);
         res.status(500).json({
            status: false,
            msg: 'Internal server error while fetching project tasks',
            data: null,
         });
      }
   }

   static async getAllByPhaseId(req, res) {
      try {
         const { phase_id } = req.body;
         if (!phase_id) {
            return res.status(400).json({
               status: false,
               msg: 'Phase ID is required',
               data: null,
            });
         }

         const tasks = await ProjectTaskEmpModel.getAllByPhaseId(phase_id);
         res.status(200).json({
            status: true,
            msg: tasks.length ? 'Tasks retrieved successfully' : 'No tasks found for this phase',
            data: tasks,
         });
      } catch (err) {
         console.error('Error fetching tasks by phase:', err);
         res.status(500).json({
            status: false,
            msg: 'Internal server error while fetching phase tasks',
            data: null,
         });
      }
   }
    static async getAllByPhaseTaskId(req, res) {
      try {
         const { phase_task_id } = req.body;
         if (!phase_task_id) {
            return res.status(400).json({
               status: false,
               msg: 'Phase ID is required',
               data: null,
            });
         }
         const tasks = await ProjectTaskEmpModel.getAllByPhaseTaskId(phase_task_id);
         res.status(200).json({
            status: true,
            msg: tasks.length ? 'Tasks retrieved successfully' : 'No tasks found for this phase',
            data: tasks,
         });
      } catch (err) {
         console.error('Error fetching tasks by phase:', err);
         res.status(500).json({
            status: false,
            msg: 'Internal server error while fetching phase tasks',
            data: null,
         });
      }
   }

   static async getAllByUserId(req, res) {
      try {
         const { user_id } = req.body;
         if (!user_id) {
            return res.status(400).json({
               status: false,
               msg: 'User ID is required',
               data: null,
            });
         }

         const tasks = await ProjectTaskEmpModel.getAllByUserId(user_id);
         res.status(200).json({
            status: true,
            msg: tasks.length ? 'Tasks retrieved successfully' : 'No tasks found for this user',
            data: tasks,
         });
      } catch (err) {
         console.error('Error fetching tasks by user:', err);
         res.status(500).json({
            status: false,
            msg: 'Internal server error while fetching user tasks',
            data: null,
         });
      }
   }
}

module.exports = ProjectTaskEmpController;
