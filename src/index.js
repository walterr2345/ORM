const express = require('express')
const { sequelizeConnection } = require('../src/connecion/connecion.js')
const models = require('../dbConection/models');
const models2 = require('../db/models')
const  personsRoute = require('./../dbConection/routes/roles.router.js')

const app = express()
const port = 3000

app.use(personsRoute)

async function main() {
    try {
        // await models.sequelize.sync({ alter: true })
        await sequelizeConnection.authenticate();
        console.log(`Connection has been established successsfuly`);
        app.listen(port)
        console.log(`Server is listen port 3000`);
    } catch (error) {
        console.error(`Unable to connect to the dataBase ${error}`);
    }
}
main()