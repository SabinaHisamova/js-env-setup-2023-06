export function checkDate() {
    const regexp = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
    const str = window.prompt('Enter date:');
    return regexp.test(str);
};

export function checkEmail() {
    const regexp = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
    const str = window.prompt('Enter date:');
    return regexp.test(str);
};

export function checkPhoneNumber() {
    const regexp = /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
    const str = window.prompt('Enter phone number:');
    return regexp.test(str);
};
