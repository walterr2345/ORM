
const Sequelize = require('sequelize')

 const sequelize = new Sequelize(
'academia_ejm',
'postgres',
'root', {
host: 'localhost',
dialect: 'postgres'
})

module.exports={
    sequelize,
}