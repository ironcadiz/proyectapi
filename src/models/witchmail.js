'use strict';
module.exports = (sequelize, DataTypes) => {
  var WitchMail = sequelize.define(
    'WitchMail',
    {
      content: DataTypes.STRING,
      seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      sent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      recipientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: function(models) {
          WitchMail.belongsTo(models.Community, { as: "sender", foreignKey: "senderId" })
          WitchMail.belongsTo(models.Community, { as: "recipient", foreignKey: "recipientId" })
        },
      },
    }
  )
  return WitchMail
}
