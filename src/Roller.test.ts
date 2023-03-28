import { Roller } from './Roller';

describe("Roller constructor", () => {
  test('should initialize a Roller object correctly with a size of 6 and set last roll to 0 and distribution to 0 for each face', () => {
    const roller = new Roller(6);
    expect(roller.last()).toBe(0);
    expect(roller.distribution().size).toBe(6);
    expect(roller.distribution().get(1)).toBe(0);
    expect(roller.distribution().get(6)).toBe(0);
  });

  test("should set faces to 6 if given a value less than 2", () => {
    const roller = new Roller(1);
    expect(roller["_faces"]).toEqual(6);
  });
});

describe("Roller roll method", () => {
  test('should handle invalid rolls correctly by returning zero', () => {
    const roller = new Roller(6);
    expect(roller.roll(0)).toBe(0);
    expect(roller.roll(7)).toBe(0);
    expect(roller.last()).toBe(0);
    expect(roller.distribution().get(1)).toBe(0);
    expect(roller.distribution().get(6)).toBe(0);
  });

  test('should handle valid rolls correctly', () => {
    const roller = new Roller(6);
    expect(roller.roll(4)).toBe(4);
    expect(roller.last()).toBe(4);
    expect(roller.distribution().get(4)).toBe(1);

    expect(roller.roll(2)).toBe(2);
    expect(roller.last()).toBe(2);
    expect(roller.distribution().get(2)).toBe(1);

    expect(roller.roll(4)).toBe(4);
    expect(roller.last()).toBe(4);
    expect(roller.distribution().get(4)).toBe(2);
  });

  test("should roll a valid number and update distribution", () => {
    const roller = new Roller(6);
    roller.roll(3);
    const distribution = roller.distribution();
    expect(roller.last()).toEqual(3);
    expect(distribution.get(3)).toEqual(1);
  });
});

describe("Roller last method", () => {
  test('should return 0 as last roll if no rolls have been made', () => {
    const roller = new Roller(6);
    expect(roller.last()).toBe(0);
  });

  test('should return the last valid roll made', () => {
    const roller = new Roller(6);
    roller.roll(4);
    expect(roller.last()).toBe(4);
    roller.roll(2);
    expect(roller.last()).toBe(2);
    roller.roll(4);
    expect(roller.last()).toBe(4);
  });
});

describe("Roller distribution method", () => {
  test("should return a distribution with all values set to 0 if no rolls have been made", () => {
    const roller = new Roller(6);
    const distribution = roller.distribution();
    for (let i = 1; i <= 6; i++) {
      expect(distribution.get(i)).toEqual(0);
    }
  });

  test("should return an object with values set to zero for invalid roll values", () => {
    const roller = new Roller(6);
    roller.roll(0);
    roller.roll(7);
    const distribution = roller.distribution();
    for (let i = 1; i <= 6; i++) {
      expect(distribution.get(i)).toEqual(0);
    }
  });
});
