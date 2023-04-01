'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      make: {
	allowNull: false,
        type: Sequelize.STRING
      },
      model: {
	allowNull: false,
        type: Sequelize.STRING
      },
      year: {
	allowNull: false,
        type: Sequelize.INTEGER
      },
      condition: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rate: {
	allowNull: false,
        type: Sequelize.FLOAT
      },
      image: {
	allowNull: false,	
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Cars');
  }
};
