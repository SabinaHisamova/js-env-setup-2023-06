
export function arraySum() {
    const arr = [2,4,6,9,10,34,23,14,45,16];
    // forEach method
    //let sum = 0;
    //arr.forEach(function(el) {
    //	sum = sum + el;
    //}) ;

    // reduce method
    const sum = arr.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber
      }, 0);

    console.log(sum);
};

export function arrayModif() {
    const arr = [2,4,6,9,10,34,23,14,45,16];

    const newArr = arr.map(el => el * el);
    //arr.map(function(el){
    //    let modified = Math.pow(el,2);
    //    return modified;
    //});
    
    return newArr;
};

export function minMaxNum() {
    const arr = [2,4,6,9,10,34,23,14,45,16];
    let min = 2;
    let max = 2;
    arr.forEach(function(el) {
    	 if(el < min) {
    	 	min = el;
    	 }
    }) ;
    
    arr.forEach(function(el) {
        if(el > max) {
            max = el;
        }
    }) ;

    console.log(`Min = ${min}, Max = ${max}`);
};