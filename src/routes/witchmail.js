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

router.get("witchmail", "/", async ctx => {
  const voluntaries = await ctx.state.currentUser.getVoluntaries()
  const voluntary = voluntaries[0]
  const community = await voluntary.getCommunity()
  let witchMail = await community.getWitchMails({ where: { sent: false } })
  ctx.orm.WitchMail.update({ sent: true }, {where: { sent:false, recipientId: community.id } })
  ctx.response.status = 200
  ctx.body = witchMail
})

router.put("witchmail", "/:id", async ctx => {
  await ctx.orm.WitchMail.update({ seen: true }, {where: { id: ctx.params.id } })
  ctx.response.status = 200
  ctx.body = "Success!"
})

module.exports = router
