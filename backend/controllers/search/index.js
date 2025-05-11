const searchService = require('./service');

const searchEntities = async (req, res) => {
   try {
      const { query, type, page, pageSize } = req.query;

      if (!query) {
         return res.status(400).json({
            success: false,
            message: 'Search term (query) is required',
         });
      }
      const result = await searchService.searchEntities(
         query,
         type || 'all',
         parseInt(page) || 1,
         parseInt(pageSize) || 2
      );
      res.json({
         status: true,
         entityType: result.entityType,
         data: result.data,
         pagination: result.pagination,
      });
   } catch (error) {
      console.error('Search error:', error);
      res.status(500).json({
         status: false,
         message: error.message || 'Error performing search',
      });
   }
};
module.exports = {
   searchEntities,
};
