'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('People', 'Persons');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('Persons', 'People');

  }
};
