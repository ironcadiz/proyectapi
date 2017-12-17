const KoaRouter = require("koa-router")
const auth = require("../middlewares/authentication")

const router = new KoaRouter()

/* Unauthorized Route */
router.get("helloName", "/:name", ctx => {
  ctx.body = {
    message: "Hello! unauthenticated user.",
    name: ctx.params.name,
  }
})

/* 
  Authorized Route 
  After using `auth`, must be signed in
*/
router.use(auth)
router.get("helloUser", "/", async ctx => {
  const voluntaries = await ctx.state.currentUser.getVoluntaries()
  const voluntary = voluntaries[0]
  const community = await voluntary.getCommunity()
  ctx.body = {
    message: "Hello!",
    user: ctx.state.currentUser,
    voluntary,
    community,
  }
})

module.exports = router
