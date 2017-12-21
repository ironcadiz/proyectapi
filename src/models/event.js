'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define(
    'Event',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      start: DataTypes.DATE,
    },
    {
      classMethods: {
        associate: function(models) {
          Event.belongsTo(models.Community, { foreignKey: "communityId" })
        },
      },
    }
  )
  return Event
}
