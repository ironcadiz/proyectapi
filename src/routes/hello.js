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
  const voluntary = await ctx.state.currentUser.getVoluntaries()[0]
  const community = voluntary.getCommunity()
  ctx.body = {
    message: "Hello!",
    user: ctx.state.currentUser,
    voluntary,
    community,
  }
})

module.exports = router
