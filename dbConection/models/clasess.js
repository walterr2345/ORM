'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clasess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //  models.module_group.hasMany(models.classes, { as: "id_module_classes", foreignKey: "id_module"});
    }
  }
  clasess.init({
    date_class: DataTypes.DATEONLY,
    note: DataTypes.INTEGER,
    hour: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'clasess',
  });
  return clasess;
};