import {getDayOfWeek} from './homeWork8';
import {minPassed} from './homeWork8';
import {getYounger} from './homeWork8';

//afterEach(() => {
//    jest.clearAllMocks();
//});

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

////jest.spyOn(Date, "new").mockReturnValue(1693991280000);
////expect(Date.now()).toBe(1693991280000);

//    const mockDate = new Date('09-06-2023 14:08:00');
//    jest.spyOn(global, 'Date').mockImplementationOnce(() => mockDate);

   it("should return passed minutes", () => {
       const mockDate = new Date('09-06-2023 14:08:00');
       const spyMock = jest.spyOn(global, 'Date').mockImplementationOnce(() => mockDate);

       const logSpy = jest.spyOn(console, "log");
       minPassed();
       expect(logSpy).toHaveBeenCalledWith(848);

       spyMock.mockRestore();
   });

});

describe('getYounger function', () => {
    it("getYounger is a function", () => {
        expect(getYounger).toBeInstanceOf(Function);
    });
    
    it("masha is younger", () => {
        expect(getYounger()).toStrictEqual('masha');
      });

})