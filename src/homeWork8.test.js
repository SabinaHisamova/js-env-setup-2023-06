import {getDayOfWeek} from './homeWork8';
import {minPassed} from './homeWork8';
import {getYounger} from './homeWork8';


describe('getDayOfWeek function', () => {
    it("getDayOfWeek is a function", () => {
        expect(getDayOfWeek).toBeInstanceOf(Function);
    });

    it("get Day Of Week using date '4.09.2023'", () => {
        jest.spyOn(window, "prompt").mockImplementationOnce(() => "6.09.2023");
        const logSpy = jest.spyOn(console, "log");
      
        getDayOfWeek();
      
        expect(logSpy).toHaveBeenCalledWith("Wednesday");
      });

});

describe('minPassed function', () => {
   it("minPassed is a function", () => {
       expect(minPassed).toBeInstanceOf(Function);
   });
   ////Date.prototype.getHours = jest.fn().mockReturnValue(1);
   ////Date.prototype.getMinutes = jest.fn().mockReturnValue(0);
   ////Date.prototype.getSeconds = jest.fn().mockReturnValue(0);

    ////jest.spyOn(Date, "new").mockReturnValue(1693991280000);
    ////expect(Date.now()).toBe(1693991280000);

//Error:Expected: 14 Received: undefined
    //const mockDate = new Date('09-06-2023 14:08:00');
    //jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    //it('should return timestamp', () => {
    //    expect(minPassed()).toEqual(14);
    //});
//
});

describe('getYounger function', () => {
    it("getYounger is a function", () => {
        expect(getYounger).toBeInstanceOf(Function);
    });
    
    it("masha is younger", () => {
        expect(getYounger()).toStrictEqual('masha');
      });

})