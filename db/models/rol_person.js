const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return rol_person.init(sequelize, DataTypes);
}

class rol_person extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_persona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'id_person'
      }
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'id_rol'
      }
    }
  }, {
    sequelize,
    tableName: 'rol_person',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rol_person_pkey",
        unique: true,
        fields: [
          { name: "id_persona" },
          { name: "id_rol" },
        ]
      },
    ]
  });
  }
}
