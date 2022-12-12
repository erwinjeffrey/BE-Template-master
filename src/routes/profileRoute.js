const express = require('express');

const { deposit } = require('../controllers/profileController');

const profileRoutes = express.Router();

profileRoutes.post('/deposit/:userId', deposit);

module.exports = profileRoutes;