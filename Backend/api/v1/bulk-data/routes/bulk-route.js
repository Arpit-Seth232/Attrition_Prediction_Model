const express = require('express');
const multer = require('multer');
const { BulkDataController } = require('../controller/Bulk-data-controller');

const BulkRoute = express.Router();

const storage = multer.memoryStorage();

const upload = multer({storage});


BulkRoute.post('/',upload.single('bulkData'),BulkDataController);

module.exports = {BulkRoute}