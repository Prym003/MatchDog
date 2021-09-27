import session from "supertest-session";
const app = require("../../src/app");

const agent = session(app);

describe("GET /dogs/:id", () => {
  it("ruta detalles de un perro, debe devolver 200", () =>
    agent.get("/dogs/:id").expect(200));
});
