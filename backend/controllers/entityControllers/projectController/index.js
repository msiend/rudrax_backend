const ProjectModel = require('@/models/entityModels/projectModel');
const ProjectCoreModel = require('@/models/coreEntityModels/projectModel');

class ProjectController {
   static async findAll(req, res) {
      try {
         const projects = await ProjectModel.findAll();
         res.status(200).json({ status: true, msg: 'Projects fetched', data: projects });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Fetch error', data: null });
      }
   }

   static async findOne(req, res) {
      const { pro_id } = req.body;
      try {
         const project = await ProjectModel.findById(pro_id);
         if (!project) return res.status(404).json({ status: false, msg: 'Not found', data: null });
         res.status(200).json({ status: true, msg: 'Project found', data: project });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Fetch error', data: null });
      }
   }

   static async create(req, res) {
      try {
         const {
            pro_client_r_id,
            pro_name,
            pro_sitedesc,
            pro_type,
            pro_worktype,
            pro_category,
            pro_sitelocation,
            pro_sitearea,
            pro_sitedirection,
            pro_duration,
            pro_recs_space,
            pro_recs_smention,
            pro_totalcost,
            pro_advancepayment,
         } = req.body;
         let getLastProjectId = await ProjectCoreModel.getLastClientRef();
         let newProjectRef;
         if (getLastProjectId.length) {
            let lastNum = parseInt(getLastProjectId[0]['pro_ref_no'].slice(-4));
            newProjectRef = getLastProjectId[0]['pro_ref_no'].replace(lastNum, lastNum + 1);
         } else {
            newProjectRef = 'RNCP0001';
         }
         console.log(newProjectRef);

         const result = await ProjectModel.create(
            pro_client_r_id,
            pro_name,
            newProjectRef,
            pro_sitedesc,
            pro_type,
            pro_worktype,
            pro_category,
            pro_sitelocation,
            pro_sitearea,
            pro_sitedirection,
            pro_duration,
            pro_recs_space,
            pro_recs_smention,
            pro_totalcost,
            pro_advancepayment
         );
         if (!result.status) throw new Error();
         res.status(201).json({
            status: true,
            msg: 'Project created successfully',
            data: {
               insertedID: result.insertId,
               pro_client_r_id,
               pro_name,
               newProjectRef,
               pro_sitedesc,
               pro_type,
               pro_worktype,
               pro_category,
               pro_sitelocation,
               pro_sitearea,
               pro_sitedirection,
               pro_duration,
               pro_recs_space,
               pro_recs_smention,
               pro_totalcost,
               pro_advancepayment,
            },
         });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Project creation failed', data: err.message });
      }
   }

   static async update(req, res) {
      const {
         pro_id,
         pro_client_r_id,
         pro_name,
         pro_sitedesc,
         pro_type,
         pro_worktype,
         pro_category,
         pro_sitelocation,
         pro_sitearea,
         pro_sitedirection,
         pro_duration,
         pro_recs_space,
         pro_recs_smention,
         pro_totalcost,
         pro_advancepayment,
      } = req.body;
      try {
         const result = await ProjectModel.update(
            pro_id,
            pro_client_r_id,
            pro_name,
            pro_sitedesc,
            pro_type,
            pro_worktype,
            pro_category,
            pro_sitelocation,
            pro_sitearea,
            pro_sitedirection,
            pro_duration,
            pro_recs_space,
            pro_recs_smention,
            pro_totalcost,
            pro_advancepayment
         );
         if (!result.status) return res.status(404).json({ status: false, msg: 'Update failed', data: null });
         res.status(200).json({
            status: true,
            msg: 'Project updated',
            data: {
               pro_id,
               pro_client_r_id,
               pro_name,
               pro_sitedesc,
               pro_type,
               pro_worktype,
               pro_category,
               pro_sitelocation,
               pro_sitearea,
               pro_sitedirection,
               pro_duration,
               pro_recs_space,
               pro_recs_smention,
               pro_totalcost,
               pro_advancepayment,
            },
         });
      } catch (err) {
         console.log(err);

         res.status(500).json({ status: false, msg: 'Update error', data: null });
      }
   }

   static async remove(req, res) {
      const { pro_id } = req.body;
      try {
         const result = await ProjectModel.remove(pro_id);
         if (!result.status) return res.status(404).json({ status: false, msg: 'Delete failed', data: null });
         res.status(200).json({ status: true, msg: 'Project deleted', data: { pro_id } });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Delete error', data: null });
      }
   }
}

module.exports = ProjectController;
