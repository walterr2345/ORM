'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class module_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      models.persons.hasMany(models.module_group, {

        foreignKey: "id_person_mt"
      });
      models.persons.hasMany(models.module_group, {
        foreignKey: "id_person_tr"
      });
      models.modules.hasMany(models.module_group, {

        foreignKey: "id_module"
      });
      models.module_group.belongsTo(models.persons, {  foreignKey: "id_person_tr"});
      models.module_group.belongsTo(models.persons, { foreignKey: "id_person_mt"});
      models.module_group.belongsTo(models.persons, {  foreignKey: "id_person_mt"});
      models.module_group.belongsTo(models.groups, { as: "id_group_group", foreignKey: "id_group"});


      models.classes.belongsTo(models.module_group, { as: "id_group_module_group", foreignKey: "id_group"});
      models.classes.belongsTo(models.module_group, { foreignKey: "id_module"});
      models.classes.belongsTo(models.module_group, { as: "id_person_mt_module_group", foreignKey: "id_person_mt"});
      models.classes.belongsTo(models.module_group, { as: "id_person_tr_module_group", foreignKey: "id_person_tr"});

    }
  }
  module_group.init({
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'module_group',
  });
  return module_group;
};