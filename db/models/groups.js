const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return groups.init(sequelize, DataTypes);
}

class groups extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_group: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_group: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "groups_pkey",
        unique: true,
        fields: [
          { name: "id_group" },
        ]
      },
    ]
  });
  }
}
