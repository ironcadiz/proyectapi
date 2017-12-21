'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Manuals",
      [
        { name: "Logística", createdAt: new Date(), updatedAt: new Date() },
        { name: "Talleres", createdAt: new Date(), updatedAt: new Date() },
        { name: "Formación", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
}
