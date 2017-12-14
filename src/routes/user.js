const KoaRouter = require("koa-router")

const router = new KoaRouter()

router.post("userCreate", "/", async ctx => {
  const user = ctx.orm.user.build(ctx.request.body)
  try {
    await user.save({ fields: ["email", "password"] })
    ctx.body = {
      message: "User creation success",
    }
  } catch (e) {
    ctx.body = {
      message: "Error creating user",
      error: e,
    }
    ctx.status = 400
  }
})

module.exports = router
