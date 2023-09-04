import {checkRightTriangle} from './homeWork9';
import {circleLengthArea} from './homeWork9';
import {quadraticEquation} from './homeWork9';

describe('checkRightTriangle function', () => {
    it("checkRightTriangle is a function", () => {
        expect(checkRightTriangle).toBeInstanceOf(Function);
    });

    it("triangle with sides(4,3,5) is right", () => {
        expect(checkRightTriangle(4,3,5)).toBe(true);
    });

    it("triangle with sides(4,3,5) is right", () => {
        expect(checkRightTriangle(24,10,40)).toBe(false);
    });

});

describe('circleLengthArea function', () => {
    it("circleLengthArea is a function", () => {
        expect(circleLengthArea).toBeInstanceOf(Function);
    });

    it("get length and area for R = 3", () => {
        const logSpy = jest.spyOn(console, "log");
        circleLengthArea(3);
        expect(logSpy).toHaveBeenCalledWith("Length: 18, Area: 28");
    });

    it("get length and area for R = 5", () => {
        const logSpy = jest.spyOn(console, "log");
        circleLengthArea(5);
        expect(logSpy).toHaveBeenCalledWith("Length: 31, Area: 78");
    });
});

describe('quadraticEquation function', () => {
    it("quadraticEquation is a function", () => {
        expect(quadraticEquation).toBeInstanceOf(Function);
    });

    it("check quadraticEquation for (5,9,2)", () => {
        jest.spyOn(window, "prompt").mockImplementationOnce(() => "5,9,2");
        const logSpy = jest.spyOn(console, "log");
        quadraticEquation();
        expect(logSpy).toHaveBeenCalledWith('x1: -0.2596875762567151, x2: -1.5403124237432848');
    });
});
