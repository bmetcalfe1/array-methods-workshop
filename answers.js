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

//Similar to the previous exercise, 
//write a function called getPositives that takes an array and uses the filter method to return a new array with only the positive numbers.

var theArray = [1, -1, 3, -3, 4, -4];

function getPositives (numArray) {
    numArray.filter(function(num){
        if (num >= 0){
            console.log(num);
        }
    });
}

getPositives(theArray);
