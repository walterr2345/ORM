const express = require("express")
const personsController = require('../controllers/persons.controller.js')

const router = express.Router()
router
    .get('/persons', personsController.getModulesByTrainee)
    .get('/persons/HeadTrainer/:id', personsController.getHeadTrainerByTrainee)
    // .post('/persons', personsController.createPerson)
module.exports = router
