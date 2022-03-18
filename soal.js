const fishBash = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      return 'fish bash';
    } else if (i % 3 === 0) {
      return 'fish';
    } else if (i % 5 === 0) {
      return 'bash';
    }
  }
};

const sorting = (arr, type) => {
  let result = arr;
  for (i = 0; i < result.length; i++) {
    for (j = 0; j < result.length; j++) {
      if (type == 'asc') {
        if (result[i] - result[j] < 0) {
          let tempLastNumber = result[j];
          result[j] = result[i];
          result[i] = tempLastNumber;
        }
      } else if (type == 'dsc') {
        if (result[i] - result[j] > 0) {
          let tempLastNumber = result[j];
          result[j] = result[i];
          result[i] = tempLastNumber;
        }
      }
    }
  }
  return result;
};

const checkWord = (word) => {
  let arrWord = word.split('');
  let reverseWord = arrWord.reverse().join('');
  if (reverseWord == word) {
    return true;
  } else {
    return false;
  }
};

fishBash(20);

module.exports = {
  checkWord,
  sorting,
  fishBash,
};
