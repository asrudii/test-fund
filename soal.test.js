const { checkWord, sorting, fishBash } = require('./soal');

// test fish bashh
test('fishbash', () => {
  expect(fishBash(5)).toMatch('fish');
  expect(fishBash(15)).toMatch('fish bash');
});

// test string dibalik
test('asa dibalik sama dengan asa maka true', () => {
  expect(checkWord('asa')).toBe(true);
});

test('rudi dibalik tidak sama dengan rudi maka false', () => {
  expect(checkWord('rudi')).toBe(false);
});

// test sorting
test('input array [4, 5, 1, 7, 2, 0] sorting', () => {
  expect(sorting([4, 5, 1, 7, 2, 0], 'dsc')).toEqual([7, 5, 4, 2, 1, 0]);
  expect(sorting([4, 5, 1, 7, 2, 0], 'asc')).toEqual([0, 1, 2, 4, 5, 7]);
});
