export function diff(a,b) {
    return Math.abs(a - b);
};

export function isWord(text) {
    const arr = text.split('');

	if (arr.includes(' ')) {
		return false;
	} else {
		return true;
	}
};

export function pow(a,x) {
    let mul = 1;
    for (let i = 1; i <= x; i++) {
    	mul = mul  * a;
    }
    return mul;	
};
