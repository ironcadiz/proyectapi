/*
  Watch if community id is setted in the context auth data ("session"),
  and search the object
*/
async function getCommunity(ctx, next) {
  if (ctx.state.authData.communityId) {
    ctx.state.authData.community = await ctx.orm.Community.findById(
      ctx.state.authData.communityId
    )
  }
  return next()
}

module.exports = getCommunity
