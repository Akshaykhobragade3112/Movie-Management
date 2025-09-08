const request = require("supertest");
const app = require("../src/app");

describe("Movies API", () => {
  it("should return empty array initially", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
