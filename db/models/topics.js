const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return topics.init(sequelize, DataTypes);
}

class topics extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_topics: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_module: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'modules',
        key: 'id_module'
      }
    },
    name_topic: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    mandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'topics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "topics_pkey",
        unique: true,
        fields: [
          { name: "id_topics" },
        ]
      },
    ]
  });
  }
}
