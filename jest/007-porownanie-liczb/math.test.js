import { compare } from "./math";
  
  describe("compare", () => {
    it("should return 'a is greater than b' if a > b", () => {
      const result = compare(10, 5);
      expect(result).toEqual("10 is greater than 5");
    });
  
    it("should return 'a is smaller than b' if a < b", () => {
      const result = compare(5, 10);
      expect(result).toEqual("5 is smaller than 10");
    });
  
    it("should return 'a is equal to b' if a === b", () => {
      const result = compare(5, 5);
      expect(result).toEqual("5 is equal to 5");
    });
  });