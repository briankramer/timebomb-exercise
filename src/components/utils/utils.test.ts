import { getRandomIntBetween10And20, getCountdownText } from "./utils";

describe("utils", () => {
  describe("getRandomIntBetween10And20", () => {
    test('random int should be between 10 and 20', () => {
      const randomInt = getRandomIntBetween10And20();
      expect(randomInt).toBeGreaterThanOrEqual(10);
      expect(randomInt).toBeLessThanOrEqual(20);
    });
});

  describe("getCountdownText", () => {
    test('exploded when countdown is 0', () => {
      expect(getCountdownText(0)).toBe('Exploded')
    });

    test('1 second when countdown is 1', () => {
      expect(getCountdownText(1)).toBe('1 second')
    });

    test('5 seconds when countdown is 5 seconds', () => {
      expect(getCountdownText(5)).toBe('5 seconds')
    });
  });
})
