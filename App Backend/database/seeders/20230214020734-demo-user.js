'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
       firstName: 'Dan',
       lastName: 'Watson',
       email: 'danwatson@dcarbarn.com',
       hash: "12345678SUM",
       username: "WatsonMan",
       wallet: 42069,
       elevation: 3,
       createdAt: new Date(),
       updatedAt: new Date()
    },
     {
      firstName: 'Ethan',
      lastName: 'Christensen',
      email: 'ethanchristensen@dcarbarn.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
