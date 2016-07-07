//Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.
var theArray = [1, 2, -3, 4, -5];

function printPositives (numArray) {
    numArray.forEach(function(num){
        if (num >= 0){
            console.log(num);
        }
    });
}

printPositives(theArray);
