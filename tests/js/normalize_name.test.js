const { normalizeName } = require('../../problems/p01/normalize_name');

test('trim and title-case', () => {
  expect(normalizeName('   nGuYeN   vaN    BiNH  ')).toBe('Nguyen Van Binh');
});

test('single token', () => {
  expect(normalizeName('a')).toBe('A');
});

test('only spaces -> empty', () => {
  expect(normalizeName('   ')).toBe('');
});

test('mixed case', () => {
  expect(normalizeName('trAn  quang    HAI')).toBe('Tran Quang Hai');
});
