const MaterialItemUpdateModel = require('@/models/entityModels/material_itemModel');
const coreMaterialRequestModel = require('@/models/coreEntityModels/material_reqModel');
// const MaterialItemUpdateModel = require('@/models/entityModels/material_itemModel');


class MaterialItemUpdateController {
   static async insertMaterialRequestWithItems(req, res) {
      const { mr_project_id, mr_phase, mr_date, materialItemsData } = req.body;
      if (!mr_project_id || !Array.isArray(materialItemsData) || materialItemsData.length === 0) {
         return res.status(400).send({ status: false, msg: 'Invalid request data', data: null });
      }
      try {
         const [data] = await coreMaterialRequestModel.getLastMaterialRef();
         let newMaterialRef;if (data['material_ref_no']) {
            let lastNum = parseInt(data['material_ref_no'].slice(-4));
            newMaterialRef = data['material_ref_no'].replace(lastNum, lastNum + 1);
         } else {newMaterialRef = 'JGCMRQ0001';}
         const result = await coreMaterialRequestModel.insertMaterialRequestWithItems(
            { mr_project_id, mr_phase, mr_date, ...{material_ref_no:newMaterialRef}},
            materialItemsData
         );
         return res.status(200).send({
            status: true,
            msg: 'Material request and items inserted successfully',
            data: {
               mr_r_id: result.insertedId, material_ref_no: result.ref, mr_project_id, mr_phase, mr_date
            },
         });
      } catch (error) {
         console.error('Error inserting material request and itams:', error);
         return res.status(500).send({
            status: false,
            msg: 'Error inserting material request and itams',
            data: null,
         });
      }
   }
   static async updateMdApproval(req, res) {
      const { mr_item_id } = req.params;
      try {
         const affectedRows = await MaterialItemUpdateModel.updateMdApproval(mr_item_id);
         if (affectedRows === 0) {
            return res.status(404).send({ status: false, msg: 'No records found with md_approval = 0', data: null });
         }
         return res
            .status(200)
            .send({ status: true, msg: 'md_approval updated successfully', data: { updatedRows: affectedRows } });
      } catch (error) {
         console.error('Error updating md_approval:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async updateFdApproval(req, res) {
      const { mr_item_id } = req.params;
      try {
         const affectedRows = await MaterialItemUpdateModel.updateFdApproval(mr_item_id);
         if (affectedRows === 0) {
            return res.status(404).send({ status: false, msg: 'No records found with fd_approval = 0', data: null });
         }
         return res
            .status(200)
            .send({ status: true, msg: 'fd_approval updated successfully', data: { updatedRows: affectedRows } });
      } catch (error) {
         console.error('Error updating fd_approval:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }

   static async updateMrDeliveryStatus(req, res) {
      const { mr_item_id } = req.params;
      try {
         const affectedRows = await MaterialItemUpdateModel.updateMrDeliveryStatus(mr_item_id);
         if (affectedRows === 0) {
            return res
               .status(404)
               .send({ status: false, msg: 'No records found with mr_delivery_status = 0', data: null });
         }
         return res.status(200).send({
            status: true,
            msg: 'mr_delivery_status updated successfully',
            data: { updatedRows: affectedRows },
         });
      } catch (error) {
         console.error('Error updating mr_delivery_status:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
   static async findAllByMatrialReqId(req, res) {
      const { id } = req.params;
      try {
         const requests = await coreMaterialRequestModel.findAllByMatrialReqId(id);
         return res.status(200).send({ status: true, msg: 'Material requests retrieved successfully', data: requests });
      } catch (error) {
         console.error('Error fetching material requests:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
}

module.exports = MaterialItemUpdateController;
