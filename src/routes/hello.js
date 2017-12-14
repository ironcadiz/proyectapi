const KoaRouter = require("koa-router")
const auth = require("../middlewares/authentication")

const router = new KoaRouter()

/* Unauthorized Route */
router.get("helloName", "/:name", ctx => {
  ctx.body = {
    message: "Hello!",
    name: ctx.params.name,
  }
})

/* 
  Authorized Route 
  After using `auth`, must be signed in
*/
router.use(auth)
router.get("helloUser", "/", ctx => {
  ctx.body = {
    message: "Hello!",
    user: ctx.state.currentUser,
  }
})

module.exports = router
