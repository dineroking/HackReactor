/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 4/13/2016
 * Time: 8:18 PM
 * Content:
 */

/*
 Welcome to the technical portion of this interview! You will be working together with your interviewer to work through the assignments
 in this file. Here are a few important points to keep in mind during the interview:

 - Communicate your thinking clearly before and while writing code. You will not be writing any code that you cannot hold conversation about.
 - You may not use any external resources outside of this document during the interview. Reference to any outside materials during the interview is considered academic dishonesty and will immediately and irrevocably remove you from consideration for admissions into our program.
 - If there is anything you would want to look up online, instead ask your interviewer, and they will support you as is appropriate for the interview setting.

 Any questions?
 */


// Make an array called `myArray` with the number values 1 through 5.

var myArray = [ 1,2,3,4,5];



// Make an object called `myObject` with 3 properties, one for your name, one for your email and one for your phone number.

var myObject = {
  name : "ronny rosabal",
  email : "ronnyrosabal@aol.com",
  phone : "3053438007"
};



// Create a function called `print` that takes 1 value as a parameter and logs it to the console.

var print = function( val ){
  console.log( val );
};


// Use `print` to print the second value in `myArray`.

print( myArray[1] );



// Use `print` to print the value in `myObject` that contains your name.

print( myObject['name'] );





// You are going to write an `each` function which takes a collection and an callback function and
// invokes the callback function on each item in the collection.

// Here are 2 example use cases of `each`. Use these examples as guidance for how an implementation of
// `each` should behave.

// First of all, `each` should be able to handle arrays:

var scores = [10345, 23432, 333356];

var printScore = function (score) {
  console.log(score);
};

each(scores, printScore);

// The following would be logged to the console:
// 10345
// 23432
// 333356


// Secondly, `each` should also be able to handle objects:

var capitals = {
  California: 'Sacramento',
  Vermont: 'Montpelier',
  Arizona: 'Phoenix'
};

var printCapital = function (capital) {
  console.log(capital);
};

each(capitals, printCapital);

// The following would be logged to the console:
// 'Sacramento'
// 'Montpelier'
// 'Phoenix'

// Write the body of the function below:

var each = function (collection, callback) {
  if( Array.isArray( collection ) ){
    for( var i = 0; i < collection.length; i++ ){
      callback( collection[i], i, collection );
    }
  }else if( typeof collection === 'object'){
    for( var prop in collection){
      callback( collection[prop], prop, collection);
    }
  }
};


// Use your implementation of `each` to log each element of `myArray`, which you created above:

each( myArray, function( val, index, array ){
  console.log( val );
} );


// Use your implementation of `each` to log each value of `myObject`, which you created above:

each( myObject, function( val, prop, obj ){
  console.log( val );
});



// Here is an example use case of `map`. Use this example as guidance for how an implementation of
// `map` should behave.


var allottedMinutes = [15, 20, 32];

var double = function (num) {
  return num * 2;
};

var doubledAllottments = map(allottedMinutes, double);
console.log(doubledAllottments); // logs [30, 40, 64]

/*
 Please walk though, line by line, what is happening in the following function.
 Be as clear as possible in your descriptions about what is happening in the code.
 If you find any bugs:
 - Say what would happen if the bug remained (in other words, why is it a bug?)
 - Say what needs to happen instead.
 - Propose how to go about making that happen.
 - Put your thinking into action and make any changes necessary to make the function work as intended.
 */

var map = function(collection, callback){
  var result = [];
  each(collection, function( item, index, list ){
    result.push( callback( item ) );
  });
  return result;
};


// Here are example use cases of `filter` and the closely related function `reject`.
// Use these examples as guidance for how implementations of `filter` or `reject` should behave.


var diceRolls = [3, 4, 6, 2, 6];

var isSix = function (num) {
  return num === 6;
};

// Filter
var sixes = filter(diceRolls, isSix);
console.log(sixes); // [6, 6];

// Reject
var notSixes = reject(diceRolls, isSix);
console.log(notSixes); // [3, 4, 2];

// Use `filter` with `numberLists` to return only the elements whose own last element is greater than
// its first.
// Write any additional functions you might need.

var list1 = [4, 2, 3]; // last element is not greater than its first
var list2 = [0, 8, 2]; // last element is greater than its first
var list3 = [8, 2, 9]; // last element is greater than its first

var numberLists = [list1, list2, list3];

// Write your code below

filter( numberLists, function( list ){
  return list[ list.length - 1] > list[0];
} );




// Here is an example use case of `reduce`. Use this example as guidance for how an implementation of
// `reduce` should behave.


var recentSavings = [4000, 5500, 60, 300];
var pastSavings = 1000;

var add = function (a, b) {
  return a + b;
};

var totalSavings = reduce(recentSavings, add, pastSavings);
totalSavings === 10860; // true

/*
 Please walk though, line by line, what is happening in the following function.
 Be as clear as possible in your descriptions about what is happening in the code.
 If you find any bugs:
 - Say what would happen if the bug remained (in other words, why is it a bug?)
 - Say what needs to happen instead.
 - Propose how to go about making that happen.
 - Put your thinking into action and make any changes necessary to make the function work as intended.
 */

var reduce = function(collection, accumulator, startValue){
  each(collection, function( item, index, array ){
    if( startValue === undefined && index === 0){
      startValue = item;
    }else{
      startValue = accumulator(startValue, item);
    }

  });
  return startValue;
};





// Create a function called `flatten` that takes a nested array and returns a flattened array.
// Use `reduce` in your implementation.

// Here's an example use of `flatten`. Use this example as guidance for how an implementation of `flatten` should
// behave. Extra note: The arrays are only two dimensional (you will not need to use recursion here).

var nestedArray = [3, [1, 2], [8, 0, 2], 9];
var flattenedArray = flatten(nestedArray);
flattenedArray === [3, 1, 2, 8, 0, 2, 9]; // true

// Write the body of the function below:

var flatten = function(nestedArray) {
  return reduce( nestedArray, function( result, curr ){
    return result.concat( curr );
  }, [] );
};







































