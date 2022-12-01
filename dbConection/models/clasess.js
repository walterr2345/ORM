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
      models.topic_class.belongsTo(models.classes, { as: "id_class_class", foreignKey: "id_class"});
      models.classes.hasMany(models.topic_class, { as: "topic_classes", foreignKey: "id_class"});



      models.classes.belongsTo(models.module_group, { foreignKey: "id_group"});
      models.classes.belongsTo(models.module_group, { foreignKey: "id_module"});
      models.classes.belongsTo(models.module_group, { foreignKey: "id_person_mt"});
      models.classes.belongsTo(models.module_group, {  foreignKey: "id_person_tr"});
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