'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clasesses', {
      id_class: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      id_person_mt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'module_group',
          key: 'id_person_tr'
        }
      },
      id_person_tr: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'module_group',
          key: 'id_person_tr'
        }
      },
      date_class: {
        type: Sequelize.DATEONLY
      },
      note: {
        type: Sequelize.INTEGER
      },
      hour: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clasesses');
  }
};