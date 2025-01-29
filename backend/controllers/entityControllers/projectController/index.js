//Hello, this is a Controller for project!

const { project } = require('@/models/entityModels/projectModel');

class ProjectsController {
   // Get all projects
   static async findAll(req, res) {
      try {
         const data = await ProjectsModel.findAll();
         return res.status(200).send({ status: true, msg: 'Projects retrieved successfully', data });
      } catch (error) {
         console.error('Error fetching projects:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Get a single project by ID
   static async findOne(req, res) {
      try {
         const { id } = req.params;
         const data = await ProjectsModel.findOne(id);
         if (!data) {
            return res.status(404).send({ status: false, msg: 'Project not found' });
         }
         return res.status(200).send({ status: true, msg: 'Project retrieved successfully', data });
      } catch (error) {
         console.error(`Error fetching project with ID ${req.params.id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Create a new project
   static async create(req, res) {
      try {
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

         if (!pro_client_r_id || !pro_ref_no) {
            return res.status(400).send({ status: false, msg: 'Missing required fields' });
         }

         const projectId = await ProjectsModel.create(
            pro_client_r_id,
            pro_name,
            pro_ref_no,
            pro_housetype,
            pro_rcctype,
            pro_sitedesc,
            pro_duration,
            pro_totalcost,
            pro_advancepayment
         );
         return res.status(201).send({ status: true, msg: 'Project added successfully', data: { pro_id: projectId } });
      } catch (error) {
         console.error('Error adding project:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Update an existing project
   static async update(req, res) {
      try {
         const { id } = req.params;
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
         const updated = await ProjectsModel.update(
            id,
            pro_client_r_id,
            pro_name,
            pro_ref_no,
            pro_housetype,
            pro_rcctype,
            pro_sitedesc,
            pro_duration,
            pro_totalcost,
            pro_advancepayment
         );

         if (!updated) {
            return res.status(404).send({ status: false, msg: 'Project not found or no changes made' });
         }
         return res.status(200).send({ status: true, msg: 'Project updated successfully' });
      } catch (error) {
         console.error(`Error updating project with ID ${req.params.id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Delete a project
   static async remove(req, res) {
      try {
         const { id } = req.params;
         const deleted = await ProjectsModel.remove(id);
         if (!deleted) {
            return res.status(404).send({ status: false, msg: 'Project not found' });
         }
         return res.status(200).send({ status: true, msg: 'Project deleted successfully' });
      } catch (error) {
         console.error(`Error deleting project with ID ${req.params.id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }

   // Paginate projects
   static async paginate(req, res) {
      try {
         const { page = 1, limit = 10 } = req.query;
         const data = await ProjectsModel.paginate(parseInt(page), parseInt(limit));
         return res.status(200).send({ status: true, msg: 'Projects retrieved successfully', data });
      } catch (error) {
         console.error('Error paginating projects:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error' });
      }
   }
}

module.exports = ProjectsController;
