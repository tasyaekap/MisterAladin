function LetterCount(sentence) {
	var arrWords = sentence.split(' ');
    var duplicatedWords = [];
    for (word of arrWords) {
    	duplicatedWords.push(countDuplicate(word))
    }
    
    const max = Math.max(...duplicatedWords)
    return max === 0 ? -1 : arrWords[duplicatedWords.indexOf(max)]
}

function countDuplicate(word) {
  var arr = word.split("").reduce((letter, index) => {
    if(!letter[index]) {
      letter[index] = 1;
    } else {
      letter[index]++;
    }
    return letter;
  }, {});
  return Object.values(arr).filter(val => val >1).length;
}


console.log(LetterCount("No Hi"))