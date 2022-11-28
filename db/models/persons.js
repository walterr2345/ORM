const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return persons.init(sequelize, DataTypes);
}

class persons extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_person: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cellphone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'persons',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "persons_pkey",
        unique: true,
        fields: [
          { name: "id_person" },
        ]
      },
    ]
  });
  }
}
