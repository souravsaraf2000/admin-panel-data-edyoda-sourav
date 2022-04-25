const express = require('express');
const { getData } = require('./controller');
const router = express.Router()

router.get('/admin/data',getData)

module.exports = router;