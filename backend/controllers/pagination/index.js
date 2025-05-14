const PaginationService = require('./service');

const getPaginatedData = async (req, res) => {
   try {
      const { entity } = req.params;
      const { page, pageSize, search } = req.query;

      const result = await PaginationService.paginate({
         entity,
         page: parseInt(page) || 1,
         pageSize: parseInt(pageSize) || 10,
         search: search || '',
      });

      res.json(result);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Pagination error', detail: error.message });
   }
};

module.exports = { getPaginatedData };

