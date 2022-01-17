const request = require("supertest");

describe("author", () => {
  describe("get author route", () => {
    describe("given that the author does not exist", () => {
      it("should return a 404", () => {
        expect(true).toBe(true);
      });
    });
  });
});
