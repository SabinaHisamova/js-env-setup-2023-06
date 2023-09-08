import {checkDate} from './homeWork10';
import {checkEmail} from './homeWork10';
import {checkPhoneNumber} from './homeWork10';

describe('checkDate function', () => {
    it("checkDate is a function", () => {
        expect(checkDate).toBeInstanceOf(Function);
    });

    it("checkDate 23.05.1996", () => {
        jest.spyOn(window, "prompt").mockImplementationOnce(() => "23.05.1996");
        expect(checkDate()).toBe(true);
    });
});

describe('checkEmail function', () => {
    it("checkEmail is a function", () => {
        expect(checkEmail).toBeInstanceOf(Function);
    });

    it("checkEmail sabina@gmail.com", () => {
        jest.spyOn(window, "prompt").mockImplementationOnce(() => "sabina@gmail.com");
        expect(checkEmail()).toBe(true);
    });
});

describe('checkPhoneNumber function', () => {
    it("checkPhoneNumber is a function", () => {
        expect(checkPhoneNumber).toBeInstanceOf(Function);
    });

    it("checkPhoneNumber +7 999 999-99-99", () => {
        jest.spyOn(window, "prompt").mockImplementationOnce(() => "+7 999 999-99-99");
        expect(checkPhoneNumber()).toBe(true);
    });
});