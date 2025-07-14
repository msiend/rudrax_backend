const ProjectModel = require('@/models/entityModels/projectModel');

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
         const result = await ProjectModel.create(req.body);
         if (!result.status) throw new Error();
         res.status(201).json({ status: true, msg: 'Project created', data: result });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Creation failed', error: err.message });
      }
   }

   static async update(req, res) {
      const { pro_id, ...data } = req.body;
      try {
         const result = await ProjectModel.update(pro_id, data);
         if (!result.status) return res.status(404).json({ status: false, msg: 'Update failed', data: null });
         res.status(200).json({ status: true, msg: 'Project updated', data: { pro_id, ...data } });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Update error', data: null });
      }
   }

   static async remove(req, res) {
      const { pro_id } = req.body;
      try {
         const result = await ProjectModel.delete(pro_id);
         if (!result.status) return res.status(404).json({ status: false, msg: 'Delete failed', data: null });
         res.status(200).json({ status: true, msg: 'Project deleted', data: { pro_id } });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Delete error', data: null });
      }
   }

}

module.exports = ProjectController;
