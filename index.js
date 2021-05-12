// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
    return bullets >= dragons * 2;
}

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!
function fixTheMeerkat(arr) {
    return arr.reverse();
}

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
function bonusTime(salary, bonus) {
    // your code here
    if (bonus === true) {
        let money = salary * 10;
        return `£${money.toString()}`;
    } else {
        return `£${salary}`;
    }
}

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1];
        }
        return "All numbers are in order!";
    }
}

// You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}

// Very simple, given a number, find its opposite.
function opposite(number) {
    //your code here
    //create the double for subtraction
    let double = number * 2;
    //subtract double from original input to get opposite
    return number - double;
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    // Code?
    //check if number is already negative
    if (num < 0) {
        return num;
        //turn number negative
    } else {
        return num * -1;
    }
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
    //You got this!
    // turn into an array
    let array = str.split("");
    // pop off first and last element
    array.shift();
    array.pop();
    //turn back into a string
    let newString = array.join("");

    return newString;
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
var summation = function (num) {
    // Code here
    var total = 0;
    for (let i = 1; i <= num; i++) {
        total = total + i;
    }
    return total;
};

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var count = 0;
    for (let sheep of arrayOfSheep) {
        if (sheep === true) {
            count = count + 1;
        }
    }
    return count;
}

// We need a function that can transform a number into a string.
function numberToString(num) {
    // Return a string of the number here!
    return num.toString();
}

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
    return Math.floor(time / 2);
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
function squareDigits(num) {
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++) {
        results[i] = string[i] * string[i];
    }
    return Number(results.join(""));
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
    //...
    // The "+" that you see in the return statement converts the string to a number
    // resourse for more info http://xkr.us/articles/javascript/unary-add/

    return +n.toString().split("").sort().reverse().join("");
}
