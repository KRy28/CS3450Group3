'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [{
      make: 'Lightning',
      model: 'McQueen',
      year: 1924,
      condition: 'poor',
      description: `Cars 3 really did a number on 'em`,
      rate: 66.24,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cars', null, {});
  }
};
