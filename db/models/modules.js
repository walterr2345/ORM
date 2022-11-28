const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return modules.init(sequelize, DataTypes);
}

class modules extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_module: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_module: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'modules',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "modules_pkey",
        unique: true,
        fields: [
          { name: "id_module" },
        ]
      },
    ]
  });
  }
}
