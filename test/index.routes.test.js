// require the Koa server
let server = require("../src/app")
// require supertest
const request = require("supertest")
// close the server after each test
describe("Routes", () => {
  beforeEach(() => {
    server = server.listen(3000)
  })
  afterEach(() => {
    server.close()
  })
  describe("routes: index", () => {
    test("should respond as expected", async () => {
      const response = await request(server).get("/")
      expect(response.status).toEqual(200)
      expect(response.type).toEqual("application/json")
      expect(response.body).toEqual({
        message: "Hello World",
      })
    })
  })
})
