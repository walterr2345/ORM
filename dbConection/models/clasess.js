'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.classes.belongsTo(models.module_group, { foreignKey: "id_group"});
    }
  }
  classes.init({
    date_class: DataTypes.DATEONLY,
    note: DataTypes.INTEGER,
    hour: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'classes',
  });
  return classes;
};