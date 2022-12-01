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
      models.module_group.hasMany(models.classes, { as: "id_person_tr_classes", foreignKey: "id_person_tr"});
      models.module_group.hasMany(models.classes, { as: "id_person_mt_classes", foreignKey: "id_person_mt"});
      models.module_group.hasMany( models.classes, { as: "id_module_classes", foreignKey: "id_module"});
      models.module_group.hasMany( models.classes, { as: "classes", foreignKey: "id_group"});
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