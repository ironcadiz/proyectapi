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
        },
      },
    }
  )
  return Community
}
