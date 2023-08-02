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
// console.log(checkYear);


/* 
Problem 2
[Write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input para meter and will return the sum of the odd numbers]
*/
function getSumOFAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i];
        sum = sum + elements
    }
    return sum;

}
const MyNumbers = [25, 98, 45, 63, 21, 74, 55];

// console.log(result);


/* 
Problem 3
[ Get Odd Numbers of an array and get odd Sum of an array]
*/
function getOddNumbersOfArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const elements = numbers[i]
        if (elements % 2 === 0) {
            oddNumbers.push(elements);
        }
    }
    return oddNumbers;
}
const MyNumbers2 = [25, 98, 45, 63, 21, 74, 55];
const oddNumbers = getOddNumbersOfArray(MyNumbers2);
const OddNumbersSum = getSumOFAnArray(oddNumbers);

console.log(OddNumbersSum);