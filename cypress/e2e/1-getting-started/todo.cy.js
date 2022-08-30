/* eslint-disable */
describe("example test", () => {
  it("might pass", () => {
    let isTails = false
    // isTails = Math.random() > 0.5;

    if (isTails) {
      throw new Error("Intentional Error");
    }

    expect(true).to.be(true);
  });
});
