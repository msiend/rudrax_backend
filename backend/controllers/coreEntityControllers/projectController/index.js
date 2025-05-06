const projectCoreModel = require('@/models/coreEntityModels/projectModel');

class projectCoreController {
   static async create(req, res) {
      const { role, r_id, email, password } = req.body;
      try {
         const result = await _UserModel.create(role, { r_id, email, password });
         res.status(201).send({ status: true, msg: 'User created successfully', data: result });
      } catch (error) {
         console.error('Create Error:', error);
         res.status(500).send({ status: false, msg: 'Failed to create user', data: null });
      }
   }
   static async getFullProjectDetails(req, res) {
      try {
         const rawData = await ProjectDetailsModel.getProjectDetails();
         const structuredData = {};
         rawData.forEach((row) => {
            const projectId = row.pro_id;
            if (!structuredData[projectId]) {
               structuredData[projectId] = {
                  pro_id: projectId,
                  contractors: [],
                  phases: [],
               };
            }
            if (row.pro_con_id) {
               const contractorExists = structuredData[projectId].contractors.some(
                  (c) => c.pro_con_id === row.pro_con_id
               );
               if (!contractorExists) {
                  structuredData[projectId].contractors.push({
                     pro_con_id: row.pro_con_id,
                     con_id: row.con_id,
                     pro_phase: row.contractor_phase,
                     pro_sub_phase: row.contractor_subphase,
                  });
               }
            }

            if (row.pro_phase_id) {
               let phase = structuredData[projectId].phases.find((p) => p.pro_phase_id === row.pro_phase_id);
               if (!phase) {
                  phase = {
                     pro_phase_id: row.pro_phase_id,
                     pro_phase_status: row.pro_phase_status,
                     pro_phase_deadline: row.pro_phase_deadline,
                     created_at: row.phase_created_at,
                     subphases: [],
                  };
                  structuredData[projectId].phases.push(phase);
               }

               if (row.pro_subphase_id) {
                  const subphaseExists = phase.subphases.some((s) => s.pro_subphase_id === row.pro_subphase_id);
                  if (!subphaseExists) {
                     phase.subphases.push({
                        pro_subphase_id: row.pro_subphase_id,
                        pro_subphase: row.pro_subphase,
                        pro_phase: row.subphase_phase_id,
                        deadline: row.deadline,
                        created_at: row.subphase_created_at,
                     });
                  }
               }
            }
         });

         res.status(200).send({
            status: true,
            msg: 'Project details fetched successfully',
            data: Object.values(structuredData),
         });
      } catch (error) {
         console.error('Error in controller:', error);
         res.status(500).send({
            status: false,
            msg: 'Failed to fetch project details',
            data: null,
         });
      }
   }
}

module.exports = projectCoreController;
