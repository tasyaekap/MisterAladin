const answer = {}
//answer for first question

answer.AdditivePersistence = (num) => {
    num = num;
    let res = 0;
    while(num > 9){
        num = sum(num);
        res++;
    };
    return res;
}

function sum(num){
    let result = 0;
    var numArray = (num.toString()).split('')
    for (number of numArray){
        result = result + parseInt(number)
    }
 
    return result
}

// answer for second question

answer.LetterCount = (sentence) => {
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


// answer for third question

// pseudocode
// ngambil huruf pertama dan ke-n dari abis itu, lakuin duakali
// begitu reach n+2, ambil huruf ke n dari depan
// abis itu ambil huruf ke-n dari ujung
// begitu reach panjang arraynya n , ambil dua huruf pertama
// terus begitu reach sisa str 2, ambil dari yang terakhir ke yang pertama. 

answer.Solution = (string, numberOfLoop) => {
    let arrOfWords = string.split('')
    let restOfTheWords = string.split('')
    const newString = []
    let i = 0;
    let count = 0
    console.log(arrOfWords.length)
    while(i < arrOfWords.length){
        if(i === 0){
                newString.push(arrOfWords[i]);
                
                restOfTheWords = restOfTheWords.splice(0, (i+1))
                console.log(restOfTheWords)
                
        }
        else if(i != 0 && i % 4 === 0){
                    newString.push(arrOfWords[i]);
                    console.log(restOfTheWords)
                    restOfTheWords = restOfTheWords.splice(0, (i+1))
        }
        
        i++
    }
    count++
    console.log(count)
    return newString.join('');
}

module.exports = answer; 
