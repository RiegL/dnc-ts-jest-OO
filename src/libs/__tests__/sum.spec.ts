import { sum } from "../sum";

describe.skip("libs suite", () => {
  describe("sum suite", () => {
    it("deve somar 1 + 2 e receber 3 como respota", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
