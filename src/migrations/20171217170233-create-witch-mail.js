'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WitchMails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      seen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      sent: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      senderId: {
        type: Sequelize.INTEGER,
        references: { model: "Communities", key: "id" },
        allowNull: false,
      },
      recipientId: {
        type: Sequelize.INTEGER,
        references: { model: "Communities", key: "id" },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WitchMails')
  },
}
