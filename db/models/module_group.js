const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return module_group.init(sequelize, DataTypes);
}

class module_group extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_person_mt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'id_person'
      }
    },
    id_person_tr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persons',
        key: 'id_person'
      }
    },
    id_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'groups',
        key: 'id_group'
      }
    },
    id_module: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'modules',
        key: 'id_module'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'module_group',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "module_group_pkey",
        unique: true,
        fields: [
          { name: "id_person_mt" },
          { name: "id_person_tr" },
          { name: "id_group" },
          { name: "id_module" },
        ]
      },
    ]
  });
  }
}
