import { objAge } from "./homeWork4";

describe("objAge function", () => {
  it("objAge is a function", () => {
    expect(objAge).toBeInstanceOf(Function);
  });

  it("all properties of obj admin", () => {
    jest.spyOn(window, "prompt").mockImplementationOnce(() => "1");
    const logSpy = jest.spyOn(console, "log");
    objAge();
    expect(logSpy).toHaveBeenCalledWith('John, 1, admin');
  });
});
