const KoaRouter = require("koa-router")
const auth = require("../middlewares/authentication")

const router = new KoaRouter()

router.use(auth)
router.post("witchmail", "/", async ctx => {
  const voluntaries = await ctx.state.currentUser.getVoluntaries()
  const voluntary = voluntaries[0]
  const community = await voluntary.getCommunity()
  const { recipientId, content } = ctx.request.body
  const wm = await ctx.orm.WitchMail.build({
    senderId: community.id,
    sent: false,
    seen: false,
    recipientId,
    content,
  }).save()
  ctx.response.status = 201
  ctx.body = wm
})

// TODO: Implement this after version and roles are implemented.
// router.get("community", "/:version_id", async ctx => {
// })

module.exports = router
