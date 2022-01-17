import request from "supertest";
const app = require("../app");
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
describe("author", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe("get author route", () => {
    describe("given that the author does not exist", () => {
      it("should return a 404", async () => {
        await request(app)
          .get("/api/v1/authors/0")
          .expect(404);
      });
    });
  });
});
