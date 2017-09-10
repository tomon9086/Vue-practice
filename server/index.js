const Koa = require("koa")
const logger = require("koa-logger")
const serve = require("koa-static")
const route = require("koa-route")
const bodyParser = require("koa-bodyparser")
const app = new Koa()

app.use(logger())
app.use(bodyParser())
app.use(serve("./public"))

app.use(route.get("/api", async ctx => {
	ctx.body = "Hello!"
}))

app.listen(3000)
