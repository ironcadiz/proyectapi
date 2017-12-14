const KoaRouter = require("koa-router")
const router = new KoaRouter()

const index = require("./routes/index")
const hello = require("./routes/hello")
const auth = require("./routes/auth")
const user = require("./routes/user")

router.use("/auth", auth.routes())

router.use("/", index.routes())
router.use("/hello", hello.routes())
router.use("/users", user.routes())

module.exports = router
