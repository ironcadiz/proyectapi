'use strict';

const models = require("../models")

module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await models.user.findOne();
    const community = await models.Community.findOne()
    return queryInterface.bulkInsert(
      "Voluntaries",
      [
        {
          name: "don gabo",
          sex: "Hombre",
          userId: user.id,
          communityId: community.id,
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
  },
};
