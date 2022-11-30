'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol_person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.persons.belongsToMany(models.roles,
        {
          as: 'id_rol_roles',
          through: models.rol_person,
          foreignKey: "id_persona",
          otherKey: "id_rol"
        }
      );
      models.roles.belongsToMany(models.persons,
        {
          as: 'id_persona_people',
          through: models.rol_person,
          foreignKey: "id_rol",
          otherKey: "id_persona"
        }
      );
    }
  }
  rol_person.init({

  }, {
    sequelize,
    modelName: 'rol_person',
  });
  return rol_person;
};