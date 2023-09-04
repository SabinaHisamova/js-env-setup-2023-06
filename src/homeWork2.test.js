import{maxNum} from './homeWork2';
import{monthName} from './homeWork2';
import{circleInSquare} from './homeWork2';


describe('max number of two', () => {

    it("maxNum is a function", () => {
        expect(maxNum).toBeInstanceOf(Function);
    });

    it("max number of (2,5)", () => {
        const logSpy = jest.spyOn(console, "log");
    
        maxNum(2,5);
    
        expect(logSpy).toHaveBeenCalledWith(5);
    })
});

describe("mothName out of number", () => {

    it("monthName is a function", () => {
        expect(monthName).toBeInstanceOf(Function);
    });

    it("mothName of 1", () => {
      jest.spyOn(window, "prompt").mockImplementationOnce(() => "1");
      const logSpy3 = jest.spyOn(console, "log");
    
      monthName();
    
      expect(logSpy3).toHaveBeenCalledWith("January");
    });
});

describe("circleInSquare function", () => {

    it("circleInSquare is a function", () => {
        expect(circleInSquare).toBeInstanceOf(Function);
    });

    it("circle = 68 fits in Square = 100", () => {
        const logSpy = jest.spyOn(console, "log");

        circleInSquare(68,100);
    
        expect(logSpy).toHaveBeenCalledWith("Circle fits");
    });
});