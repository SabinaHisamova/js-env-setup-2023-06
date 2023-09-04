const arr = [2,4,6,9,10,34,23,14,45,16];

export function arraySum() {
    let sum = 0;
    arr.forEach(function(el) {
    	sum = sum + el;
    }) ;

    console.log(sum);
};

export function arrayModif() {
    const newArr = arr.map(function(el){
        let modified = Math.pow(el,2);
        return modified;
    });
    
    return newArr;
};

export function minMaxNum() {
    let min;
    let max;
    arr.forEach(function(el) {
        if(min) {
    	    if(el < min) {
    	    	min = el;
    	    }
        } else {min = el;}
    }) ;
    
    arr.forEach(function(el) {
        if(max) {
            if(el > max) {
                max = el;
            }
        } else {max = el;}
    }) ;

    console.log(`Min = ${min}, Max = ${max}`);
};