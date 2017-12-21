'use strict';
module.exports = (sequelize, DataTypes) => {
  var Community = sequelize.define(
    "Community",
    {
      name: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: function(models) {
          Community.hasMany(models.Voluntary, { foreignKey: "communityId" })
          Community.hasMany(models.WitchMail, { foreignKey: "recipientId" })
          Community.hasMany(models.Event, { foreignKey: "communityId" })
        },
      },
    }
  )
  return Community
}
