import {getDayOfWeek} from './homeWork8';
import {secPassed} from './homeWork8';
import {getYounger} from './homeWork8';

describe('getDayOfWeek function', () => {
    it("getDayOfWeek is a function", () => {
        expect(getDayOfWeek).toBeInstanceOf(Function);
    });

    it("get Day Of Week using date '4.09.2023'", () => {
        jest.spyOn(window, "prompt").mockImplementationOnce(() => "4.09.2023");
        const logSpy = jest.spyOn(console, "log");
      
        getDayOfWeek();
      
        expect(logSpy).toHaveBeenCalledWith("Monday");
      });

});

describe('secPassed function', () => {
    it("secPassed is a function", () => {
        expect(secPassed).toBeInstanceOf(Function);
    });
})

describe('getYounger function', () => {
    it("getYounger is a function", () => {
        expect(getYounger).toBeInstanceOf(Function);
    });
    
    it("masha is younger", () => {
        expect(getYounger()).toStrictEqual('masha');
      });

})