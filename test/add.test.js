import chai from "chai";
import add from "../src/add.js";

const expect = chai.expect;

describe("add function", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("should handle negative numbers", () => {
    expect(add(-2, 3)).to.equal(1);
  });
});
