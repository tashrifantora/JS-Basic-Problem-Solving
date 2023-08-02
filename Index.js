// Problem 1 [Leap Year]
function leapYear(year) {
    const remainde = year % 4;
    if (remainde == 0) {
        return true;
    }
    else {
        return false
    }
}
const checkYear = leapYear(1958);
console.log(checkYear);