'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Communities",
      [
        {
          name: "El Rodeo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Constantué",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
