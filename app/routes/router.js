/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/test', require('./api/test'));

module.exports = router;