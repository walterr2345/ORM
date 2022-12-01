const express = require("express")
const personsController = require('../controllers/persons.controller.js')

const router = express.Router()

router
    .get('/persons', personsController.getPersons)
    .post('/persons', personsController.createPerson)
module.exports = router
