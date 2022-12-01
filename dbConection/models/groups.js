'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.groups.hasMany(models.module_group, {  foreignKey: "id_group"});
    }
  }
  groups.init({
    name_group: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'groups',
  });
  return groups;
};