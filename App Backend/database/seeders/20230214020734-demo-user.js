'use strict';

/** @type {import('sequelize-cli').Migration} */
const { generateHashedPassword } = require('../../routes/helpers.js')
module.exports = {
   async up (queryInterface, Sequelize) {
   const ppl = await queryInterface.bulkInsert('People', [
    {
       firstName: 'Dan',
       lastName: 'Watson',
       email: 'danwatson@dcarbarn.com',
       hash: await generateHashedPassword("12345678SUM"),
       username: "WatsonMan",
       wallet: 42069,
       elevation: 3,
       createdAt: new Date(),
       updatedAt: new Date(),
    },
    {
       firstName: '1Dan',
       lastName: '1Watson',
       email: '1danwatson@dcarbarn.com',
       hash: await generateHashedPassword("112345678SUM"),
       username: "1WatsonMan",
       wallet: 42069,
       elevation: 3,
       createdAt: new Date(),
       updatedAt: new Date(),
	    
    },
    {
       firstName: '2Dan',
       lastName: '2Watson',
       email: '2danwatson@dcarbarn.com',
       hash: await generateHashedPassword("212345678SUM"),
       username: "2WatsonMan",
       wallet: 42069,
       elevation: 3,
       createdAt: new Date(),
       updatedAt: new Date(),
    }],{});
    await queryInterface.bulkInsert('Users', [
    {
       user_id: (ppl-2),
       createdAt: new Date(),
       updatedAt: new Date()
    },
    /*{  
       user_id: (ppl-1),
       createdAt: new Date(),
       updatedAt: new Date()
    }, 
    {   
       user_id: ppl,
       createdAt: new Date(),
       updatedAt: new Date()
    }*/
    ],{});
    await queryInterface.bulkInsert('Employees', [
    /*{
       employee_id: (ppl-2),
       createdAt: new Date(),
       updatedAt: new Date()
    },*/
    {  
       employee_id: (ppl-1),
       hours: 0.0,
       payRate: 420.0,
       createdAt: new Date(),
       updatedAt: new Date()
    }, 
    /*{   
       employee_id: ppl,
       createdAt: new Date(),
       updatedAt: new Date()
    }*/
   
    ],{});
    await queryInterface.bulkInsert('Managers', [
    /*{
       manager_id: (ppl-2),
       createdAt: new Date(),
       updatedAt: new Date()
    },
    {  
       manager_id: (ppl-1),
       createdAt: new Date(),
       updatedAt: new Date()
    },*/ 
    {   
       manager_id: ppl,
       hours: 0.0,
       payRate: 420.0,
       createdAt: new Date(),
       updatedAt: new Date()
    }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Employees', null, {});
    await queryInterface.bulkDelete('Managers', null, {});
  }
};
