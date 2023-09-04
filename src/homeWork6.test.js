import { diff } from "./homeWork6";
import { isWord } from "./homeWork6";
import { pow } from "./homeWork6";


describe("diff function", () => {
    it("diff is a function", () => {
      expect(diff).toBeInstanceOf(Function);
    });
  
    it("diff of 50 and 20", () => {
      expect(diff(50,20)).toStrictEqual(30);
    });

    it("diff of 10 and 100", () => {
        expect(diff(10,100)).toStrictEqual(90);
    });
});

describe("isWord function", () => {
    it("isWord is a function", () => {
      expect(isWord).toBeInstanceOf(Function);
    });
  
    it("isWord 'hey'", () => {
        expect(isWord('hey')).toBe(true);
    });

    it("isWord 'left and right'", () => {
        expect(isWord('left and right')).toBe(false);
    });
});

describe("pow function", () => {
    it("pow is a function", () => {
      expect(pow).toBeInstanceOf(Function);
    });
  
    it("pow(2,2)", () => {
      expect(pow(2,2)).toStrictEqual(4);
    });

    it("pow(3,4)", () => {
        expect(pow(3,4)).toStrictEqual(81);
    });
});