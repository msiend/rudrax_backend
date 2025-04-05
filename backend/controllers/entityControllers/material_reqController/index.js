const MaterialRequestModel = require('@/models/entityModels/material_reqModel');
const coreMaterialRequestModel = require('@/models/coreEntityModels/material_reqModel');

class MaterialRequestController {
   static async findAll(req, res) {
      try {
         const requests = await MaterialRequestModel.findAll();
         return res.status(200).send({ status: true, msg: 'Material requests retrieved successfully', data: requests });
      } catch (error) {
         console.error('Error fetching material requests:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async findOne(req, res) {
      const { mr_r_id } = req.params;
      try {
         const request = await MaterialRequestModel.findOne(mr_r_id);
         if (!request) {
            return res.status(404).send({ status: false, msg: 'Material request not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Material request retrieved successfully', data: request });
      } catch (error) {
         console.error(`Error retrieving material request with ID ${mr_r_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async create(req, res) {
      const { mr_project_ref, mr_project_id, mr_phase, mr_date } = req.body;
      try {const [data] = await coreMaterialRequestModel.getLastMaterialRef();
         let newMaterialRef;
         if (data) {let lastNum = parseInt(data['material_ref_no'].slice(-4));
            newRef = data['material_ref_no'].replace(lastNum, lastNum + 1);
         } else {newRef = 'JGCMRQ0001';}
         const newRequest = await MaterialRequestModel.create(
            newMaterialRef,
            mr_project_ref,
            mr_project_id,
            mr_phase,
            mr_date
         );
         return res.status(201).send({ status: true, msg: 'Material request created successfully', data: newRequest });
      } catch (error) {
         console.error('Error creating material request:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async update(req, res) {
      const { mr_r_id } = req.params;
      const { mr_project_ref, mr_project_id, mr_phase, mr_date } = req.body;
      try {
         const isUpdated = await MaterialRequestModel.update(
            mr_r_id,
            mr_project_ref,
            mr_project_id,
            mr_phase,
            mr_date
         );
         if (!isUpdated) {
            return res.status(404).send({ status: false, msg: 'Material request not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Material request updated successfully', data: null });
      } catch (error) {
         console.error(`Error updating material request with ID ${mr_r_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async remove(req, res) {
      const { mr_r_id } = req.params;
      try {
         const isDeleted = await MaterialRequestModel.remove(mr_r_id);
         if (!isDeleted) {
            return res.status(404).send({ status: false, msg: 'Material request not found', data: null });
         }
         return res.status(200).send({ status: true, msg: 'Material request deleted successfully', data: null });
      } catch (error) {
         console.error(`Error deleting material request with ID ${mr_r_id}:`, error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async paginate(req, res) {
      let { page, limit } = req.query;
      page = parseInt(page) || 1;
      limit = parseInt(limit) || 10;

      try {
         const paginatedData = await MaterialRequestModel.paginate(page, limit);
         return res
            .status(200)
            .send({ status: true, msg: 'Material requests retrieved successfully', data: paginatedData });
      } catch (error) {
         console.error('Error fetching paginated material requests:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
}

module.exports = MaterialRequestController;
