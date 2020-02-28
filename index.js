
function getMissingLetters(sentence) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const lowercased = sentence.trim().toLowerCase();

  for (let i = 0; i < lowercased.length; i++) {
    const index = letters.indexOf(lowercased[i]);
    if (index >= 0) {
      letters.splice(index, 1);
    }
  }

  return letters.join(' ');
};

console.log('Missing letters: ', getMissingLetters('Hello, TravelEatMeat!'));
