const ProjectModel = require('@/models/entityModels/projectModel');
const ProjectCoreModel = require('@/models/coreEntityModels/projectModel');

class ProjectController {
   static async findAll(req, res) {
      try {
         const projects = await ProjectModel.findAll();
         if (!projects) {
            return res.status(404).send({ status: false, msg: 'No projects found', data: null });
         }
         res.status(200).send({ status: true, msg: 'Projects retrieved successfully', data: projects });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Error retrieving projects', error: error.message });
      }
   }

   static async findOne(req, res) {
      const { pro_id } = req.body;
      try {
         const project = await ProjectModel.findOne(pro_id);
         if (!project) {
            return res.status(404).send({ status: false, msg: 'Project not found', data: null });
         }
         res.status(200).send({ status: true, msg: 'Project retrieved successfully', data: project });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Error retrieving project', error: error.message });
      }
   }

   static async create(req, res) {
      try {
         const { pro_client_r_id, pro_name, pro_housetype, pro_rcctype, pro_sitedesc, pro_duration, pro_totalcost, pro_advancepayment } = req.body;
         let getLastProjectId = await ProjectCoreModel.getLastClientRef()
         let newProjectRef;
         if (getLastProjectId) {
            let lastNum = parseInt(getLastProjectId[0]['pro_ref_no'].slice(-4));
            newProjectRef = getLastProjectId[0]['pro_ref_no'].replace(lastNum, lastNum + 1);
         } else { newProjectRef = 'JGCP0001'; }
         console.log(newProjectRef);

         const projectId = await ProjectModel.create({ pro_client_r_id, pro_name, newProjectRef, pro_housetype, pro_rcctype, pro_sitedesc, pro_duration, pro_totalcost, pro_advancepayment });

         res.status(201).send({
            status: true, msg: 'Project created successfully', data: {
               pro_id: projectId,
               pro_client_r_id: pro_client_r_id,
               pro_name: pro_name,
               pro_ref_no: newProjectRef,
               pro_housetype: pro_housetype,
               pro_rcctype: pro_rcctype,
               pro_sitedesc: pro_sitedesc,
               pro_duration: pro_duration,
               pro_totalcost: pro_totalcost,
               pro_advancepayment: pro_advancepayment,
            }
         });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Error creating project', error: error.message });
      }
   }

   static async update(req, res) {
      const { pro_id } = req.body;
      const {
         pro_client_r_id,
         pro_name,
         pro_ref_no,
         pro_housetype,
         pro_rcctype,
         pro_sitedesc,
         pro_duration,
         pro_totalcost,
         pro_advancepayment,
      } = req.body;
      try {
         const updated = await ProjectModel.update({
            pro_id,
            pro_client_r_id,
            pro_name,
            pro_ref_no,
            pro_housetype,
            pro_rcctype,
            pro_sitedesc,
            pro_duration,
            pro_totalcost,
            pro_advancepayment,
         });
         if (!updated) {
            return res.status(404).send({ status: false, msg: 'Project not found or no changes made', data: null });
         }
         res.status(200).send({
            status: true, msg: 'Project updated successfully', data: {
               pro_id: pro_id,
               pro_client_r_id: pro_client_r_id,
               pro_name: pro_name,
               pro_ref_no: pro_ref_no,
               pro_housetype: pro_housetype,
               pro_rcctype: pro_rcctype,
               pro_sitedesc: pro_sitedesc,
               pro_duration: pro_duration,
               pro_totalcost: pro_totalcost,
               pro_advancepayment: pro_advancepayment,
            }
         });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Error updating project', error: error.message });
      }
   }

   static async remove(req, res) {
      const { id } = req.body;
      try {
         const deleted = await ProjectModel.remove(id);
         if (!deleted) {
            return res.status(404).send({ status: false, msg: 'Project not found', data: null });
         }
         res.status(200).send({ status: true, msg: 'Project deleted successfully', data: { id } });
      } catch (error) {
         res.status(500).send({ status: false, msg: 'Error deleting project', error: error.message });
      }
   }
}

module.exports = ProjectController;
