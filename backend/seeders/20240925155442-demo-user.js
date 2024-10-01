'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        email: 'example@example.com',
        password: '$2b$10$3ksuYpzK.joTF6JlqNLCseY1JjIMv6jk0EeOrYTnj342adctD6OwC',
        address: 'Tangerang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John2',
        email: 'example2@example.com',
        password: '$2b$10$3ksuYpzK.joTF6JlqNLCseY1JjIMv6jk0EeOrYTnj342adctD6OwC',
        address: 'Tangerang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John3',
        email: 'example3@example.com',
        password: '$2b$10$3ksuYpzK.joTF6JlqNLCseY1JjIMv6jk0EeOrYTnj342adctD6OwC',
        address: 'Tangerang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
