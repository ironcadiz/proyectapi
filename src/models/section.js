'use strict';
module.exports = (sequelize, DataTypes) => {
  var Section = sequelize.define(
    'Section',
    {
      name: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: function(models) {
          Section.belongsTo(models.Manual, { foreignKey: "manualId" })
          Section.hasMany(models.Report, { foreignKey: "sectionId" })
        },
      },
    }
  )
  return Section
}
