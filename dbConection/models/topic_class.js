'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class topic_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      models.classes.belongsToMany(models.topics, {
        as: 'id_topic_topics',
        through: models.topic_class,
        foreignKey: "id_class",
        otherKey: "id_topic"
      }
      );

      models.topics.belongsToMany(models.classes, {
        as: 'id_class_classes',
        through: models.topic_class,
        foreignKey: "id_topic",
        otherKey: "id_class"
      }
      );

    }
  }
  topic_class.init({

  }, {
    sequelize,
    modelName: 'topic_class',
  });
  return topic_class;
};