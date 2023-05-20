const express = require('express');
const { httpGetAllPlanets } = require('./planets.ctrl');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;
