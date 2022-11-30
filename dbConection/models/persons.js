'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.persons.belongsToMany(models.persons, { as: 'id_person_ht_people', through: models.htrainer_trainee, foreignKey: "id_person_tr", otherKey: "id_person_ht" });
      models.persons.belongsToMany(models.persons, { as: 'id_person_tr_people', through: models.htrainer_trainee, foreignKey: "id_person_ht", otherKey: "id_person_tr" });
    }
  }
  persons.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'persons',
  });
  return persons;
};