'use strict';
module.exports = (sequelize, DataTypes) => {
  var Manual = sequelize.define(
    'Manual',
    {
      name: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: function(models) {
          Manual.hasMany(models.Section, { foreignKey: "manualId" })
          Manual.hasMany(models.Report, { foreignKey: "manualId" })
        },
      },
    }
  )
  return Manual
}
