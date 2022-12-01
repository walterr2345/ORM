'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.modules.hasMany(models.topics, { foreignKey: "id_module"});
      models.modules.hasMany(models.module_group, {  foreignKey: "id_module"});
      models.module_group.belongsTo(models.modules, {  foreignKey: "id_module"});
    }
  }
  modules.init({
    name_module: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'modules',
  });
  return modules;
};