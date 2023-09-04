export function maxNum(a,b){
    console.log(Math.max(a,b));
};

export function monthName() {
    const num = +prompt("Enter number 1 to 12");
  
    const date = new Date();
    date.setMonth(num - 1);
  
    console.log(
      date.toLocaleString("en-US", {
        month: "long"
      })
    );
};

export function circleInSquare(circle,square){
    const diameter = 2 * Math.sqrt(circle / Math.PI);
    const a = Math.sqrt(square);

    if (Number(diameter) <= Number(a)) {
    	console.log('Circle fits');
    } else {
        console.log('Circle doesn\'t fit');
    }
};
