const express = require("express")
const personsController = require('../controllers/persons.controller.js')

const router = express.Router()
router
    .get('/persons/:id', personsController.getModulesByTrainee)
    .get('/persons/HeadTrainer/:id', personsController.getHeadTrainerByTrainee)
    .get('/persons/ModuleTrainerGetClass/:id',personsController.getExistsTraineesByModule)

module.exports = router
