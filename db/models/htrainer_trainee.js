const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return htrainer_trainee.init(sequelize, DataTypes);
}

class htrainer_trainee extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_person_tr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'id_person'
      }
    },
    id_person_ht: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'id_person'
      }
    }
  }, {
    sequelize,
    tableName: 'htrainer_trainee',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "htrainer_trainee_pkey",
        unique: true,
        fields: [
          { name: "id_person_tr" },
          { name: "id_person_ht" },
        ]
      },
    ]
  });
  }
}
