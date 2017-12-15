const KoaRouter = require("koa-router")

const router = new KoaRouter()

router.get("index", "/", ctx => {
  ctx.body = {
    message: "Welcome to proyectapi",
  }
})

module.exports = router
