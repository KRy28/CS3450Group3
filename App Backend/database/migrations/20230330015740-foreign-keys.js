'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return Promise.all([
        queryInterface.addColumn('Users', 'person_id',
            {
              type: Sequelize.UUID,
              references: {
                model: 'People',
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              defaultValue: null, after: 'can_maintain_system'
            }),
	queryInterface.addColumn('Employees', 'person_id',
            {
              type: Sequelize.UUID,
              references: {
                model: 'People',
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              defaultValue: null, after: 'can_maintain_system'
            }),
	queryInterface.addColumn('Managers', 'person_id',
            {
              type: Sequelize.UUID,
              references: {
                model: 'People',
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              defaultValue: null, after: 'can_maintain_system'
            }),
	queryInterface.addColumn('Reservations', 'user_id',
            {
              type: Sequelize.UUID,
              references: {
                model: 'Users',
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              defaultValue: null, after: 'can_maintain_system'
            }),
        ]);
      },

      down: (queryInterface, Sequelize) => {
        return Promise.all([ 
          queryInterface.removeColumn('Users', 'person_id'),
          queryInterface.removeColumn('Employees', 'person_id'),
          queryInterface.removeColumn('Managers', 'person_id'),
          queryInterface.removeColumn('Reservations', 'user_id'),
        ]);
      }
    };
