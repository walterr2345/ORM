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
      models.topics.belongsTo(models.modules, {  foreignKey: "id_module"});
      models.topics.hasMany(models.topic_class, { foreignKey: "id_topic"});
      models.topic_class.belongsTo(models.topics, {  foreignKey: "id_topic"});
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