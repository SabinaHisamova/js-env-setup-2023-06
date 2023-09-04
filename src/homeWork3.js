export function sum50to100 () {
    let sum = 0;
    for (let i = 50; i <= 100; i++){
    	sum = sum + i;
    };

    console.log(sum);
};

export function multTable() {
    let j = 7;
  
    for (let i = 1; i <= 10; i++) {
      let mult = j * i;
      console.log(j + " x " + i + " = " + mult);
    }
};
  