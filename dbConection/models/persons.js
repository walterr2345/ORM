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
      // htrainer_trainee.belongsTo(persons, { as: "id_person_tr_person", foreignKey: "id_person_tr"});
      // persons.hasMany(htrainer_trainee, { as: "htrainer_trainees", foreignKey: "id_person_tr"});
      // htrainer_trainee.belongsTo(persons, { as: "id_person_ht_person", foreignKey: "id_person_ht"});
      // persons.hasMany(htrainer_trainee, { as: "id_person_ht_htrainer_trainees", foreignKey: "id_person_ht"});
      // module_group.belongsTo(persons, { as: "id_person_mt_person", foreignKey: "id_person_mt"});
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