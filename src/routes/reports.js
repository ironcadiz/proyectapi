const KoaRouter = require("koa-router")
const auth = require("../middlewares/authentication")

const router = new KoaRouter()

router.use(auth)
router.get("manuals", "/manuals", async ctx => {
  const manuals = await ctx.orm.Manual.findAll()
  ctx.body = {
    manuals,
  }
})

router.get("sections", "/sections/:manualId", async ctx => {
  const sections = await ctx.orm.Section.findAll( { where: { manualId: ctx.params.manualId } })
  ctx.body = {
    sections,
  }
})

router.post("reports", "/", async ctx => {
  const { manualId, sectionId, content } = ctx.request.body
  await ctx.orm.Report.build({
    manualId,
    sectionId,
    content,
  }).save()
  ctx.response.status = 201
  ctx.body = "Success!"
})

module.exports = router
