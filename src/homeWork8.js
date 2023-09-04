export function getDayOfWeek(a,b) {
    const input = prompt('Enter date DD.MM.YYYY');
    const [day,month,year] = input.split('.');
    const date = new Date(`${year}-${month}-${day}`);
    const options = { weekday: 'long' };
    const dayOfWeek = date.toLocaleString('en-US', options);

    console.log(dayOfWeek); 
};

export function secPassed(date) {
	let hours = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	let res = hours * 60 + min + sec / 60;

	console.log(res);
};

export function getYounger() {
    let petya = new Date('1994-10-08');
    let masha = new Date('1998-05-07');
    let young;

    if (Number(petya) < Number(masha)) {
    	young = 'masha';
    } else {
    	young = 'petya';
    }

    return young;
}