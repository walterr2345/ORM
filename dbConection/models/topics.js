'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.topics.belongsTo(models.modules, { as: "id_module_module", foreignKey: "id_module"});
    }
  }
  topics.init({
    name_topic: DataTypes.STRING,
    mandatory: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'topics',
  });
  return topics;
};