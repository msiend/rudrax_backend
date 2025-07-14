const ProjectSiteQueryModel = require('@/models/entityModels/queryModel');

class ProjectSiteQueryController {
   static async findAll(req, res) {
      try {
         const queries = await ProjectSiteQueryModel.findAll();
         res.status(200).send({
            status: true,
            msg: 'Queries retrieved successfully',
            data: queries,
         });
      } catch (error) {
         console.error(error);
         res.status(500).send({
            status: false,
            msg: 'Failed to retrieve queries',
            data: null,
         });
      }
   }

   static async findOne(req, res) {
      try {
         const { q_id } = req.body;
         const query = await ProjectSiteQueryModel.findById(q_id);
         if (!query) {
            return res.status(404).send({
               status: false,
               msg: 'Query not found',
               data: null,
            });
         }
         res.status(200).send({
            status: true,
            msg: 'Query retrieved successfully',
            data: query,
         });
      } catch (error) {
         console.error(error);
         res.status(500).send({
            status: false,
            msg: 'Failed to retrieve query',
            data: null,
         });
      }
   }

   static async create(req, res) {
      try {
         const { q_title, q_desc, q_type, q_category, q_raised_by, q_status } = req.body;

         const result = await ProjectSiteQueryModel.create(q_title, q_desc, q_type, q_category, q_raised_by, q_status);

         if (!result.status) {
            return res.status(500).json({
               status: false,
               msg: 'Something went wrong!',
               error: result?.error,
            });
         }

         res.status(201).send({
            status: true,
            msg: 'Query created successfully',
            data: result,
         });
      } catch (error) {
         console.error(error);
         res.status(500).send({
            status: false,
            msg: 'Failed to create query',
            error,
         });
      }
   }

   static async update(req, res) {
      try {
         const { q_id, q_title, q_desc, q_type, q_category, q_status, approved_by, approved_date, q_remarks } =
            req.body;

         const result = await ProjectSiteQueryModel.update(
            q_id,
            q_title,
            q_desc,
            q_type,
            q_category,
            q_status,
            approved_by,
            approved_date,
            q_remarks
         );

         if (!result?.status) {
            return res.status(404).send({
               status: false,
               msg: 'Query not found',
               data: null,
            });
         }

         res.status(200).send({
            status: true,
            msg: 'Query updated successfully',
            data: {
               q_id,
               q_title,
               q_desc,
               q_type,
               q_category,
               q_status,
               approved_by,
               approved_date,
               q_remarks,
            },
         });
      } catch (error) {
         console.error(error);
         res.status(500).send({
            status: false,
            msg: 'Failed to update query',
            data: null,
         });
      }
   }

   static async remove(req, res) {
      try {
         const { q_id } = req.body;
         const result = await ProjectSiteQueryModel.delete(q_id);
         if (!result?.status) {
            return res.status(404).send({
               status: false,
               msg: 'Query not found',
               data: null,
            });
         }
         res.status(200).send({
            status: true,
            msg: 'Query deleted successfully',
            data: { q_id },
         });
      } catch (error) {
         console.error(error);
         res.status(500).send({
            status: false,
            msg: 'Failed to delete query',
            data: null,
         });
      }
   }

   static async paginate(req, res) {
      try {
         const { page = 1, limit = 10 } = req.query;
         const offset = (page - 1) * limit;

         const queries = await ProjectSiteQueryModel.findAll();

         res.status(200).send({
            status: true,
            msg: 'Queries retrieved successfully',
            data: {
               page,
               limit,
               records: queries.slice(offset, offset + parseInt(limit)),
            },
         });
      } catch (error) {
         console.error(error);
         res.status(500).send({
            status: false,
            msg: 'Failed to paginate queries',
            data: null,
         });
      }
   }
}

module.exports = ProjectSiteQueryController;
