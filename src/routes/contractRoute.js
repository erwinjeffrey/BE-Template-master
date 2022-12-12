const express = require('express');

const { getContractById, getContracts } = require('../controllers/contractController');
const { getProfile } = require('../middleware/getProfile');

const contractRouter = express.Router();

contractRouter.get('/',getProfile, getContracts);
contractRouter.get('/:id', getProfile, getContractById);

module.exports = contractRouter;