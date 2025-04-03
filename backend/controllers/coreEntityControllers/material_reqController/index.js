const MaterialItemUpdateModel = require('@/models/MaterialItemUpdateModel');

class MaterialItemUpdateController {
   static async updateMdApproval(req, res) {
    const { mr_item_id } = req.params;
      try {
         const affectedRows = await MaterialItemUpdateModel.updateMdApproval(mr_item_id);
         if (affectedRows === 0) {
            return res.status(404).send({ status: false, msg: 'No records found with md_approval = 0', data: null });
         }
         return res.status(200).send({ status: true, msg: 'md_approval updated successfully', data: { updatedRows: affectedRows } });
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
         return res.status(200).send({ status: true, msg: 'fd_approval updated successfully', data: { updatedRows: affectedRows } });
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
            return res.status(404).send({ status: false, msg: 'No records found with mr_delivery_status = 0', data: null });
         }
         return res.status(200).send({ status: true, msg: 'mr_delivery_status updated successfully', data: { updatedRows: affectedRows } });
      } catch (error) {
         console.error('Error updating mr_delivery_status:', error);
         return res.status(500).send({ status: false, msg: 'Internal Server Error', data: null });
      }
   }
}

module.exports = MaterialItemUpdateController;
