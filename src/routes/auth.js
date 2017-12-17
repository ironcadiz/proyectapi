const KoaRouter = require("koa-router")
const jwtgenerator = require("jsonwebtoken")

const router = new KoaRouter()

router.post("auth", "/", async ctx => {
  const { email, password } = ctx.request.body
  const user = await ctx.orm.user.find({ where: { email } })
  if (user && (await user.checkPassword(password))) {
    const token = await new Promise((resolve, reject) => {
      jwtgenerator.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET || "thisissosecret",
        (err, tokenResult) => (err ? reject(err) : resolve(tokenResult))
      )
    })
    const voluntaries = await user.getVoluntaries()
    const voluntary = voluntaries[0]
    ctx.body = { token, user, voluntary }
  } else {
    ctx.throw(401, "Wrong e-mail or password")
  }
})

module.exports = router
