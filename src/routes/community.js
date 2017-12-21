const KoaRouter = require("koa-router")
const auth = require("../middlewares/authentication")

const router = new KoaRouter()

router.use(auth)
router.get("communities", "/", async ctx => {
  const communities = await ctx.orm.Community.findAll()
  ctx.body = {
    communities,
  }
})

// TODO: Implement this after version and roles are implemented.
// router.get("community", "/:version_id", async ctx => {
// })

module.exports = router
