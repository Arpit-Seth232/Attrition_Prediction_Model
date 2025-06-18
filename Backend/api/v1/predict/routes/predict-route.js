const express = require('express');
const { predictController } = require('../controller/predict-controller');
const { trainController } = require('../controller/training-controller');

const predictRoute = express.Router();

predictRoute.post('/',predictController);
predictRoute.post('/trainingModel',trainController);

module.exports = {
    predictRoute
}