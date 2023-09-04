export function checkRightTriangle(a,b,c) {
    let sqa = Math.pow(a,2);
    let sqb = Math.pow(b,2);
    let sqc = Math.pow(c,2);

    if ((sqa == sqb+sqc) || (sqb == sqa+sqc) || (sqc == sqa+sqb)) {
    	return true;
    } else {
    	return false;
    };
};

export function circleLengthArea(r) {
    const length = Math.floor(2 * Math.PI * r);
    const s = Math.floor(Math.PI * Math.pow(r,2));
    console.log(`Length: ${length}, Area: ${s}`);
};

export function quadraticEquation() {
    let x1;
    let x2;
    let x;
    const input = prompt('Enter a,b,c');
    let [a,b,c] = input.split(',');
    const d = Math.pow(b,2) - 4*a*c;

    if (d > 0) {
    	x1 = (-b + Math.sqrt(d)) / (2*a);
    	x2 = (-b - Math.sqrt(d)) / (2*a);

    	console.log(`x1: ${x1}, x2: ${x2}`);

    } else if (d==0) {
    	x = -b / (2*a);
    	console.log(`x: ${x}`);
    } else {
    	console.log('No roots of an equation!')
    }
};
