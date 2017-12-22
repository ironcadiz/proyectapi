const KoaRouter = require("koa-router")
const auth = require("../middlewares/authentication")

const router = new KoaRouter()

router.use(auth)
router.post("event", "/", async ctx => {
  const voluntaries = await ctx.state.currentUser.getVoluntaries()
  const voluntary = voluntaries[0]
  const community = await voluntary.getCommunity()
  const { description, name, start } = ctx.request.body
  const ev = await ctx.orm.Event.build({
    name,
    description,
    start: new Date(start),
    communityId: community.id,
  }).save()
  ctx.response.status = 201
  ctx.body = ev
})

router.get("event", "/", async ctx => {
  const voluntaries = await ctx.state.currentUser.getVoluntaries()
  const voluntary = voluntaries[0]
  const community = await voluntary.getCommunity()
  let events = await community.getEvents()
  ctx.response.status = 200
  ctx.body = { events }
})

router.get("event", "/all", async ctx => {
  if (ctx.state.currentUser.isAdmin) {
    let events = await ctx.orm.Event.findAll()
    ctx.response.status = 200
    ctx.body = { events }
  } else {
    ctx.response.status = 401
    ctx.body = "Unauthorized!"
  }
})


router.get("event", "/date/:date", async ctx => {
  const events = await ctx.orm.Event.findAll({ where: { start: { $between: [new Date(ctx.params.date), new Date(`${ctx.params.date}T23:59:59.99`)] } } })
  ctx.response.status = 200
  ctx.body = { events }
})

module.exports = router
