const { DataTypes } = require("sequelize")
const { sequelize } = require('../src/connecion/connecion.js')

const project = sequelize.define("projects", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol_name: {
        type: DataTypes.STRING,
    }
})

project.hasMany(tasks, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

module.exports = {
    project
}