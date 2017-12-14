const KoaRouter = require("koa-router")

const router = new KoaRouter()

router.get("index", "/", ctx => {
  ctx.body = {
    message: "Hello World",
  }
})

module.exports = router
