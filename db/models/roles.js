const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return roles.init(sequelize, DataTypes);
}

class roles extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_rol: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rol_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "id_rol" },
        ]
      },
    ]
  });
  }
}
