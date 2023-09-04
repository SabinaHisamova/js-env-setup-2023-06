import { arraySum } from "./homeWork5";
import { arrayModif } from "./homeWork5";
import { minMaxNum } from "./homeWork5";


describe("arraySum function", () => {
  it("objAge is a function", () => {
    expect(arraySum).toBeInstanceOf(Function);
  });

  it("sum of array [2,4,6,9,10,34,23,14,45,16]", () => {
    const logSpy = jest.spyOn(console, "log");
    arraySum();
    expect(logSpy).toHaveBeenCalledWith(163);
  });
});

describe("arrayModif function", () => {
    it("arrayModif is a function", () => {
      expect(arrayModif).toBeInstanceOf(Function);
    });
  
    it("check modificated arr [2,4,6,9,10,34,23,14,45,16]", () => {
      const logSpy = jest.spyOn(console, "log");
      arrayModif();
      expect(arrayModif()).toStrictEqual([4, 16, 36, 81, 100, 1156, 529, 196, 2025, 256]);
    });
  });

  describe("minMaxNum function", () => {
    it("minMaxNum is a function", () => {
      expect(minMaxNum).toBeInstanceOf(Function);
    });
  
    it("Min and Max of arr: Min = 2, Max = 45", () => {
      const logSpy = jest.spyOn(console, "log");
      minMaxNum();
      expect(logSpy).toHaveBeenCalledWith('Min = 2, Max = 45');
    });
  });