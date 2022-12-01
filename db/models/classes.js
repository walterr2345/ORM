const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return classes.init(sequelize, DataTypes);
}

class classes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_class: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_person_mt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'module_groups',
        key: 'id_person_tr'
      }
    },
    id_person_tr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'module_groups',
        key: 'id_person_tr'
      }
    },
    date_class: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    note: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_module: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'module_groups',
        key: 'id_person_tr'
      }
    },
    id_group: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'module_group',
        key: 'id_person_tr'
      }
    },
    hour: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'classes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "classes_pkey",
        unique: true,
        fields: [
          { name: "id_class" },
        ]
      },
    ]
  });
  }
}
