/* Authentication */
const jwt = require("koa-jwt")

async function authenticationMiddleware(ctx, next) {
  if (ctx.state.authData && ctx.state.authData.id) {
    ctx.state.currentUser = await ctx.orm.user.findById(ctx.state.authData.id)
  }
  return next()
}

module.exports = [
  jwt({ secret: process.env.JWT_SECRET, key: "authData" }),
  authenticationMiddleware,
]
