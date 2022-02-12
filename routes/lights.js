const express = require('express');
const router = express.Router();

// Controllers
const lightController = require('../controllers/lights');

// @route lights/manage-lights
// desc Get All light data
// Public
router.get('/manage-lights', lightController.getManageLights);

// @route lights/total-light-time
// desc Get Total time of lights
// Public
router.get('/total-light-time', lightController.getTotalLightTime);

module.exports = router;