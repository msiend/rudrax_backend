const express = require('express');
const router = express.Router();
const SearchController = require('@/controllers/search');
const authMiddleware = require('@/middleware/verifyRoles');

router.get('/search', SearchController.searchEntities);


module.exports = router;