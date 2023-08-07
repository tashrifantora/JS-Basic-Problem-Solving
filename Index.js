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

// console.log(OddNumbersSum);


/* 
Problem 4
[Revers Factorial]
*/
function reversFactorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i
    }
    return result;
}
const number = 6;
const factorial = reversFactorial(number);
console.log(factorial);



// 03.08.23 [Module - 20]
// Problem 5 
function hourToMin(hour) {
    const min = hour * 60;
    return min
}

const hour = 2;
const result = hourToMin(hour);
console.log(result);


// Problem 6

function leapYear(year) {
    let leapYear = [];
    for (let i = 0; i < year.length; i++) {
        const element = year[i];
        const remainder = element % 4;
        if (remainder === 0) {
            leapYear.push(element);
        }
        else {
            console.log('Its not leap year')
        }
    }
    return leapYear;
}

const yearArray = [2023, 2024, 2025, 2028, 2030];
const leapYearResult = leapYear(yearArray);
console.log(leapYearResult);



/* 
Problem 7
[Find lowest number ]
*/
function lowestNumber(numArray) {
    let lowest = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        const element = numArray[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;

}

const numberArr = [325, 187, 514, 236, 871, 981, 214];
const res = lowestNumber(numberArr);
console.log('Lowest is:', res);

/* 
Problem 8
[Fibo nacchi===]
*/
const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);


/* 
Problem 9
[duplicet Remove]
*/
function removeDuplicate(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i]
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique
}

const names = ['ali', 'rita', 'rina', 'habib', 'ali', 'sonia', 'rita', 'sona', 'sonam', 'sona'];
const uniqueName = removeDuplicate(names);
console.log(uniqueName)

/* 
Problem 10
[
    1. Show output from: 1-50
    2. If the number is divisable by 3 then instade of the number show 'Foo'
    3. If the number is divisable by 5 then instade of the number show 'Bar'
    3. If the number is divisable by 3 & 5 then instade of the number show 'FooBar'
]
*/
function fooBar() {
    for (let i = 1; i <= 50; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FooBar');
        }
        else if (i % 3 === 0) {
            console.log("Foo");
        }
        else if (i % 5 === 0) {
            console.log('Bar')
        }
        else {
            console.log(i)
        }
    }
    return
}
fooBar()

/* 
Problem 11
[Highest Camera]
*/
const phones = [
    { name: 'iphone', camera: 40, color: 'lavender' },
    { name: 'Oppo', camera: 28, color: 'red' },
    { name: 'vivo', camera: 90, color: 'black' },
    { name: 'redmi', camera: 200, color: 'lavender' },
    { name: 'nokia', camera: 120, color: 'lavender' },
    { name: 'infinix', camera: 16, color: 'lavender' },
];
function highestCam(phones) {
    let highest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}
const selectedOne = highestCam(phones);
console.log(selectedOne);


/* 
Problem 12
[Discount on condition]
*/

function tickitPrice(tickitQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTickitRate = 70;
    if (tickitQuantity <= 100) {
        const price = tickitQuantity * first100Rate;
        return price;
    }
    else if (tickitQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTickitQuantity = tickitQuantity - 100;
        const restTickitPrice = restTickitQuantity * second100Rate;
        const totalPrice = first100Price + restTickitPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTickitQuantity = tickitQuantity - 200;
        const restTickitPrice = restTickitQuantity * restTickitRate;
        const totalCost = first100Price + second100Price + restTickitPrice;
        return totalCost

    }
}

const price = tickitPrice(12);
console.log(price);


/* 
Problem 13
[Practice problem]
*/
function findingBadData(array) {
    let goodNum = [];
    let badNum = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (element < 0) {
            badNum.push(element)
        }
        else {
            goodNum.push(element)
        }
    }
    return [badNum, goodNum];
}
const theArray = [25, 65, 47, 12, -55, -14, -10, 0, 99, -100];
const result2 = findingBadData(theArray);
console.log(result2);


/* 
Problem 14
[Last element cheacking] Way: 1(Hard)
*/
function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return "Please provide me a valid string name"
    }
    else {
        const arr = fileName.split(".");
        const lastElement = arr.pop();
        return lastElement.toLocaleLowerCase() === "js";
    }
}
const fileType = isJavaScriptFile('index.js');
console.log(fileType);


/* 
Problem 14
[Last element cheacking] Way: 1(Easy)
*/
function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return "Please provide me a valid string name"
    }

    return fileName.toLocaleLowerCase().endsWith('.js');
}
const fileType2 = isJavaScriptFile('index.html');
console.log(fileType2);
