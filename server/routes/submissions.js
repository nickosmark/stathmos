const express = require('express');
const submissionsController = require('../controllers/submissions');
const router = express.Router();

router.get('/',submissionsController.getSubmissions);
router.post('/',submissionsController.postSubmissions);

module.exports = router;
