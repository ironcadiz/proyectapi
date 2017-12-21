'use strict';

const models = require("../models")

module.exports = {
  async up(queryInterface, Sequelize) {
    const log = await models.Manual.findOne({ where: { name: "Logística" } })
    const tall = await models.Manual.findOne({ where: { name: "Talleres" } })
    const form = await models.Manual.findOne({ where: { name: "Formación" } })
    return queryInterface.bulkInsert(
      "Sections",
      [
        { manualId: log.id, name: "Quincho 10m", createdAt: new Date(), updatedAt: new Date() },
        { manualId: log.id, name: "Juego Dos Torres", createdAt: new Date(), updatedAt: new Date() },
        { manualId: log.id, name: "Corredor", createdAt: new Date(), updatedAt: new Date() },
        { manualId: tall.id, name: "Adultos", createdAt: new Date(), updatedAt: new Date() },
        { manualId: tall.id, name: "Niños", createdAt: new Date(), updatedAt: new Date() },
        { manualId: form.id, name: "Dia 0", createdAt: new Date(), updatedAt: new Date() },
        { manualId: form.id, name: "Dia 1", createdAt: new Date(), updatedAt: new Date() },
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
