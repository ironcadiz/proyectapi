'use strict';
module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define(
    'Report',
    {
      content: DataTypes.STRING,
      manualId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: function(models) {
          Report.belongsTo(models.Manual, { foreignKey: "manualId" })
          Report.belongsTo(models.Section, { foreignKey: "sectionId" })
        },
      },
    }
  )
  return Report
}
