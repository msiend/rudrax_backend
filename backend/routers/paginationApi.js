const express = require('express');
const router = express.Router();
const PaginationController = require('@/controllers/pagination');
const authMiddleware = require('@/middleware/verifyRoles');

router.get('/api/:entity', PaginationController.getPaginatedData);

module.exports = router;
