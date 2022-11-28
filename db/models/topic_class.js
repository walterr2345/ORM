const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return topic_class.init(sequelize, DataTypes);
}

class topic_class extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_topic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'topics',
        key: 'id_topics'
      }
    },
    id_class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'classes',
        key: 'id_class'
      }
    }
  }, {
    sequelize,
    tableName: 'topic_class',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "topic_class_pkey",
        unique: true,
        fields: [
          { name: "id_topic" },
          { name: "id_class" },
        ]
      },
    ]
  });
  }
}
