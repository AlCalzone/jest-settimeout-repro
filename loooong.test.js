const {loooong, loooongSync} = require("./loooong");

describe("this should not fail", () => {
  it("does though", async () => {
    jest.setTimeout(15000);
    await loooong();
  });

  it("this works", async () => {
    await loooong();
  }, 15000);

  it("this also works", () => {
    jest.setTimeout(15000);
    loooongSync();
  });
});
