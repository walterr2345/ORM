'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class htrainer_trainee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.htrainer_trainee.belongsTo(models.persons, {  foreignKey: "id_person_tr"});
      models.htrainer_trainee.belongsTo(models.persons, {  foreignKey: "id_person_ht"});
    }
  }
  htrainer_trainee.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'htrainer_trainee',
  });
  return htrainer_trainee;
};