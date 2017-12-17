'use strict';
module.exports = (sequelize, DataTypes) => {
  var WitchMail = sequelize.define(
    'WitchMail',
    {
      content: DataTypes.STRING,
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
