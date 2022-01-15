function AdditivePersistence(num){
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
