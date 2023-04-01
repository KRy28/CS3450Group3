'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return Promise.all([
        queryInterface.addColumn('Users', 'user_id',
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
	queryInterface.addColumn('Employees', 'employee_id',
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
	queryInterface.addColumn('Managers', 'manager_id',
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
	queryInterface.addColumn('Reservations', 'reservation_id',
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
          queryInterface.removeColumn('Users', 'user_id'),
          queryInterface.removeColumn('Employees', 'employee_id'),
          queryInterface.removeColumn('Managers', 'manager_id'),
          queryInterface.removeColumn('Reservations', 'reservation_id'),
        ]);
      }
    };
