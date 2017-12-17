'use strict';
module.exports = (sequelize, DataTypes) => {
  var Voluntary = sequelize.define(
    "Voluntary",
    {
      name: DataTypes.STRING,
      sex: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      communityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      classMethods: {
        associate: function(models) {
          Voluntary.belongsTo(models.user, { foreignKey: "userId" })
          Voluntary.belongsTo(models.Community, { foreignKey: "communityId" })
        },
      },
    }
  )
  return Voluntary
}
