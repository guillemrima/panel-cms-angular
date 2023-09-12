'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 2,
        name: 'Maria del Carmen',
        surnames: 'Martorell Adrover',
        email: 'mariadelcarrmen@gmail.com',
        password:  'password2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pages', null, {});
  }
};
