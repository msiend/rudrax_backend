const ProjectEmployeeModel = require('@/models/entityModels/project_empModel');

class ProjectEmployeeController {
   static async findAll(req, res) {
      try {
         const data = await ProjectEmployeeModel.findAll();
         res.status(200).json({ status: true, msg: 'Employees fetched', data });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Fetch error', data: null });
      }
   }

   static async findOne(req, res) {
      const { pemp_id } = req.body;
      try {
         const employee = await ProjectEmployeeModel.findOne(pemp_id);
         if (!employee) return res.status(404).json({ status: false, msg: 'Not found', data: null });
         res.status(200).json({ status: true, msg: 'Employee found', data: employee });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Fetch error', data: null });
      }
   }

   static async create(req, res) {
      try {
         const result = await ProjectEmployeeModel.create(req.body);
         if (!result.status) throw new Error();
         res.status(201).json({ status: true, msg: 'Employee assigned', data: result });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Creation failed', error: err.message });
      }
   }

   static async update(req, res) {
      const { pemp_id, ...data } = req.body;
      try {
         const result = await ProjectEmployeeModel.update(pemp_id, data);
         if (!result.status) return res.status(404).json({ status: false, msg: 'Update failed', data: null });
         res.status(200).json({ status: true, msg: 'Employee updated', data: { pemp_id, ...data } });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Update error', data: null });
      }
   }

   static async remove(req, res) {
      const { pemp_id } = req.body;
      try {
         const result = await ProjectEmployeeModel.remove(pemp_id);
         if (!result.status) return res.status(404).json({ status: false, msg: 'Delete failed', data: null });
         res.status(200).json({ status: true, msg: 'Employee removed', data: { pemp_id } });
      } catch (err) {
         res.status(500).json({ status: false, msg: 'Delete error', data: null });
      }
   }
}

module.exports = ProjectEmployeeController;
