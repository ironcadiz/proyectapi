const KoaRouter = require("koa-router")
const router = new KoaRouter()

const index = require("./routes/index")
const hello = require("./routes/hello")
const auth = require("./routes/auth")
const user = require("./routes/user")
const community = require("./routes/community")
const witchmail = require("./routes/witchmail")
const reports = require("./routes/reports")
const events = require("./routes/event")

router.use("/auth", auth.routes())

router.use("/", index.routes())
router.use("/hello", hello.routes())
router.use("/users", user.routes())
router.use("/communities", community.routes())
router.use("/witchmail", witchmail.routes())
router.use("/reports", reports.routes())
router.use("/event", events.routes())

module.exports = router
