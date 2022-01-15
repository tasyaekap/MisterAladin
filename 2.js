// Write a function with the following conditions :
// Function can accept character input and the number of loop
// Each of the first characters will be taken out from the string and input into a new string
// Then every the number of inputs loop take out from the string and input into a new string
// Do this until the characters in the string empty
// Print out the New Of String
// Example :
//     function solution(string, numberOfLoop)
//     solution("misteraladin",4)
//     Answer : print MEAIANLTSRID
// MEAIANLTSRID

// mister
// MEA

//algoritmanya
// ngambil huruf pertama dan ke-n dari abis itu, lakuin duakali
// begitu reach n+2, ambil huruf ke n dari depan
// abis itu ambil huruf ke-n dari ujung
// begitu reach panjang arraynya n , ambil dua huruf pertama
// terus begitu reach sisa str 2, ambil dari yang terakhir ke yang pertama. 

function solution(string, numberOfLoop){
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
    return newString;
}

console.log(solution('misteraladin', 4))
console.log()


