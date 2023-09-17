function add(a, b) {
  return a + b;
}

test('Adding 1 + 2 should equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
