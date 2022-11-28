const express = require('express')
const { sequelize } = require('../src/connecion/connecion.js')

const app = express()
const port = 3000

async function main() {
    try {
        await sequelize.sync({ force: false })
        await sequelize.authenticate();
        console.log(`Connection has been established successsfuly`);
        app.listen(port)
        console.log(`Server is listen port 3000`);
    } catch (error) {
        console.error(`Unable to connect to the dataBase ${error}`);
    }
}
main()