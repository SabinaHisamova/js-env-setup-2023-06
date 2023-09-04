import { printSumMult } from './homeWork1';
import { length } from './homeWork1';
import { sumOfThreeDigitNum } from './homeWork1';


describe('sum mult function', () => {

  it("printSumMult is a function", () => {
    expect(printSumMult).toBeInstanceOf(Function);
  });

  it("log sum and mult of (5,10)", () => {
    const logSpy = jest.spyOn(console, "log");
    
    printSumMult(5,10);
    
    expect(logSpy).toHaveBeenCalledWith('Sum = 15, Mult = 50');
  });

});

describe("text length function", () => {
  it("length is a function", () => {
    expect(length).toBeInstanceOf(Function);
  });

  it("check length for 'Hey,there!'", () => {
    const logSpy = jest.spyOn(console, "log");

    length('Hey,', 'there!');

    expect(logSpy).toHaveBeenCalledWith("SumLength = 10");
  });
});

describe("sum of a three-digit number", () => {
  it("sumOfThreeDigitNum is a function", () => {
    expect(sumOfThreeDigitNum).toBeInstanceOf(Function);
  });

  it("check sum of three-digit number 123", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "123");
    const logSpy3 = jest.spyOn(console, "log");

    sumOfThreeDigitNum();

    expect(logSpy3).toHaveBeenCalledWith("6");
  });
});