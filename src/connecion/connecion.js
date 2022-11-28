
const Sequelize = require('sequelize')

 const sequelizeConnection = new Sequelize(
'academia_ejm',
'postgres',
'root', {
host: 'localhost',
dialect: 'postgres'
})

module.exports={
    sequelizeConnection,
}