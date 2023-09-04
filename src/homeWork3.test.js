import{sum50to100} from './homeWork3';
import { multTable } from "./homeWork3";

describe('sum of all integers from 50 to 100', () => {

    it("sum50to100 is a function", () => {
        expect(sum50to100).toBeInstanceOf(Function);
    });

    it("sum50to100 is a function", () => {
        const logSpy = jest.spyOn(console, "log");

        sum50to100();
    
        expect(logSpy).toHaveBeenCalledWith(3825);
    });
});

describe("multTable", () => {
    it("multTable check", () => {
      const logSpy = jest.spyOn(console, "log");
  
      multTable();
  
      expect(logSpy).toHaveBeenCalledWith("7 x 10 = 70");
    });
  });