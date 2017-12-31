const KoaRouter = require("koa-router")
const auth = require("../middlewares/authentication")
const getCommunity = require("../middlewares/getCommunity")

const router = new KoaRouter()

router.use(auth)
router.use(getCommunity)

router.post("batch", "/", async ctx => {
  const community = ctx.state.authData.community
  let { events, witchMails, reports } = ctx.request.body
  let ev, wm, rt
  if (events) {
    events.forEach(event => {
      event.start = new Date(event.start)
      event.communityId = community.id
    })
    ev = await ctx.orm.Event.bulkCreate(events)
  } else {
    ev = []
  }

  if (witchMails) {
    witchMails.forEach(witchMail => {
      witchMail.senderId = community.id
      witchMail.sent = false
      witchMail.seen = false
    })
    wm = await ctx.orm.WitchMail.bulkCreate(witchMails)
  } else {
    wm = []
  }

  if (reports) {
    rt = await ctx.orm.Report.bulkCreate(reports)
  } else {
    rt = []
  }
  ctx.response.status = 201
  ctx.body = { events: ev, witchMails: wm, reports: rt }
})

module.exports = router
