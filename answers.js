// Exercise 1
//Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.

// var theArray = [1, 2, -3, 4, -5];

// function printPositives (numArray) {
//     numArray.forEach(function(num){
//         if (num >= 0){
//             console.log(num);
//         }
//     });
// }

// printPositives(theArray);

//Exercise 2
//Similar to the previous exercise, 
//write a function called getPositives that takes an array and uses the filter method to return a new array with only the positive numbers.

// var theArray = [1, -1, 3, -3, 4, -4];
// var newArray = [];


// function getPositives (numArray) {
//     return numArray.filter(function(num){
//          if (num >= 0){
//              return num;
//          }
//      });
//  }

//  var makePos = getPositives(theArray);
//  newArray.push(makePos);
 
//  console.log(newArray);

// Exercise 2B
//Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. 
// Your code will look something like: return arr.filter(...).forEach(...).

// var theArray = [1, 2, -3, 4, -5];

// function printPositives (numArray) {
//     numArray.filter(function(num){
//         if (num >= 0){
//             console.log(num);
//         }
//     });
// }

// printPositives(theArray);

// EXERCISE 3
// Write a function called filterArray that takes an array AND a function as arguments. 
// Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.

// NOTE: You are allowed to use Array.prototype.filter to answer this question.
//NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

// function filterArray (numArray, anyFunction) {
//     return numArray.filter(anyFunction);
// }

// EXERCISE 4
// Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
// You should use Array.prototype.reduce to do your work.

//Hint: You can use String.prototype.split to split the string into an array of words.

// function longestWord (anyString) {
//     var strSplit = anyString.split(' ');
    
//     var longestWord = strSplit.reduce(function(longest, currentWord) {
//         if(currentWord.length > longest.length)
//           return currentWord;
//         else
//           return longest;
//     }, "");

// return longestWord;
// }

// console.log(longestWord("I am the greatest rapper of all time"));

// EXERCISE 5
// Write a function called countVowels that takes a string and returns the number of vowels in the string. 
// You should use Array.prototype.reduce to do your work.

//Hint: You can use String.prototype.split again. 
//There is a way to use it to split a string by character. Try to Google it :)

//Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.

//the ghetto way!!
// function countVowels (anyString) {
//     var vowelsCount = 0;
    
//     for (var i = 0; i <= anyString.length - 1; i++){
//         if (anyString.charAt(i) == "a" || anyString.charAt(i) == "e" || anyString.charAt(i) == "i" || anyString.charAt(i) == "o" || anyString.charAt(i) == "u") {
//           vowelsCount += 1;
//         }
//     }
//     console.log(vowelsCount);
// }

// countVowels("I am the greatest rapper alive");

// function countVowels (anyString) {
//     var strSplit = anyString.split('');

//     return strSplit.reduce(function(totalVowels, isVowel) {
//         if (isVowel === "a" || isVowel === "e" || isVowel === "i" || isVowel === "o" || isVowel === "u") {
//             totalVowels += 1;
//         }
//         return totalVowels;
//     }, 0);
// }

// console.log(countVowels("I am the greatest rapper alive"));

//EXERCISE 6

// Write a function called highLow that takes an array of numbers, 
// and returns an object with a property highest containing the highest number, 
// and a property lowest containing the lowest number, using Array.prototype.reduce.

//For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
// Hint: Javascript has a special value called Infinity, which is higher than any other number. 
//See if you can initialize your reduce accumulator with Infinity and -Infinity :)

function highLow (numArray) {
    var getsHighest = numArray.reduce(function(highestNumber, currentNumber) {
        if (currentNumber > highestNumber) {
            return currentNumber;
        }
        else {
            return highestNumber;
        }
    });
    
    var getsLowest = numArray.reduce(function(lowestNumber, currentNumber) {
        if (currentNumber < lowestNumber) {
            return currentNumber;
        }
        else {
            return lowestNumber;
        }
    });
    
    var result = {
    highest: getsHighest,
    lowest: getsLowest
    };
    console.log(result);
}

highLow([2, 342234, 6, -5, 8, 11]);