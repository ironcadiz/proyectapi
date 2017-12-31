const KoaRouter = require("koa-router")
const jwtgenerator = require("jsonwebtoken")

const router = new KoaRouter()

router.post("auth", "/", async ctx => {
  const { email, password } = ctx.request.body
  const user = await ctx.orm.user.find({ where: { email } })
  if (user && (await user.checkPassword(password))) {
    const voluntaries = await user.getVoluntaries()
    const voluntary = voluntaries[0]
    const token = await new Promise((resolve, reject) => {
      jwtgenerator.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin,
          name: user.name,
          communityId: voluntary ? voluntary.communityId : undefined,
        },
        process.env.JWT_SECRET || "thisissosecret",
        (err, tokenResult) => (err ? reject(err) : resolve(tokenResult))
      )
    })
    ctx.body = { token }
  } else {
    ctx.throw(401, "Wrong e-mail or password")
  }
})

module.exports = router
