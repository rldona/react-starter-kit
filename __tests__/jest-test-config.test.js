import add from '../src/jest-test-config';

describe('Arithmetic operations', () => {
  test('adding 1 + 1 equals 2', () => {
    expect(add(1, 1)).toBe(2);
  });
});
