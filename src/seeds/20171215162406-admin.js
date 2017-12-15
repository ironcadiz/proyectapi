const bcrypt = require('bcryptjs')

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin@trabajosproyecta.cl",
          password: await bcrypt.hash("123123", 10),
          name: "don gabo",
          isAdmin: true,
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
}
