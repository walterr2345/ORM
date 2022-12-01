'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       models.rol_person.belongsTo(models.roles, { as: "id_rol_role", foreignKey: "id_rol"});
      models.roles.hasMany(models.rol_person, { as: "rol_people", foreignKey: "id_rol"});
    }
  }
  roles.init({
    rol_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};