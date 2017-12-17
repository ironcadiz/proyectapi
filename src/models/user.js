"use strict"
const bcrypt = require("bcryptjs")

async function buildPasswordHash(instance) {
  if (instance.changed("password")) {
    const hash = await bcrypt.hash(instance.password, 10)
    instance.set("password", hash)
  }
}

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      classMethods: {
        associate: function(models) {
          user.hasMany(models.Voluntary, { foreignKey: "userId" })
        },
      },
    }
  )
  user.beforeUpdate(buildPasswordHash)
  user.beforeCreate(buildPasswordHash)
  user.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }
  return user
}
