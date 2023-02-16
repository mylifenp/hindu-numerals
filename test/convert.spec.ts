import * as mocha from "mocha";
import * as chai from "chai";
import { toArabicNumerals, toHinduNumerals } from "../lib/converter";

const expect = chai.expect;

describe("test the hindu-numerals converter", () => {
  it('should convert hindu numeral "१२३" to arabic numeral 123', () => {
    expect(toArabicNumerals("१२३")).to.equal(123);
  });
  it('should convert arabic numeral 123 to hindu numeral "१२३"', () => {
    expect(toHinduNumerals(123)).to.equal("१२३");
  });
  it("it should leave non-numerals alone while converting to ", () => {
    expect(toHinduNumerals("12abc3")).to.equal("१२abc३");
  });
  it("if possible return type should be number when converting to arabic numerals", () => {
    const result = toArabicNumerals("१२३");
    expect(typeof result).to.equal("number");
  });
  it("the return type of toHinduNumerals should be string when passed a number", () => {
    const result = toHinduNumerals(123);
    expect(typeof result).to.equal("string");
  });
  it("the return type of toHinduNumerals should be string when passed a string", () => {
    const result = toHinduNumerals("123abc");
    expect(typeof result).to.equal("string");
  });
});
