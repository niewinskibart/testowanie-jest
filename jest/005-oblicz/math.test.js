import {calculate} from "./math"

describe("calculate", () => {
    it("should add two numbers correctly", () => {
      const result = calculate("+", 1, 2);
      expect(result).toEqual(3);
    });
  
    it("should subtract two numbers correctly", () => {
      const result = calculate("-", 3, 2);
      expect(result).toEqual(1);
    });
  
    it("should multiply two numbers correctly", () => {
      const result = calculate("*", 3, 4);
      expect(result).toEqual(12);
    });
  
    it("should divide two non-zero numbers correctly", () => {
      const result = calculate("/", 4, 2);
      expect(result).toEqual(2);
    });
  
    it("should throw an error when dividing by 0", () => {
      expect(() => calculate("/", 1, 0)).toThrow("Divisor must be non-0 value");
    });
  
    it("should throw an error when an unknown operation is passed", () => {
      expect(() => calculate("%", 1, 2)).toThrow("Unknown operation");
    });
  });