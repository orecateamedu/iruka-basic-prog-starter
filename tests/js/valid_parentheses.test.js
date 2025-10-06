const { isValid } = require('../../problems/p02/valid_parentheses');

test('basic true', () => {
  expect(isValid('()')).toBe(true);
});

test('true mix', () => {
  expect(isValid('()[{}]')).toBe(true);
});

test('wrong pair', () => {
  expect(isValid('(]')).toBe(false);
});

test('cross', () => {
  expect(isValid('([)]')).toBe(false);
});

test('deep nest', () => {
  expect(isValid('(((())))')).toBe(true);
});
