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
          // associations can be defined here
        },
      },
    }
  )
  return Manual
}
