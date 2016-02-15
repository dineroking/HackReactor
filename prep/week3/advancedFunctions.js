/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/11/16
 * Time: 9:42 PM
 * Content: Exercises from the Advanced Functions section of Remote Prep
 */

////////// HTML FUNCTIONS

var listCreator = function( stringArray ) {
  var html = '<ul>';//local html var
  var len = stringArray.length;
  for( var i = 0; i < len; i++ ) {
    html += '<li>' + stringArray[ i ] + '</li>';
  }
  html += '</ul>';
  return html;
};

var htmlAppender = function( selector, html ) {
  $( selector ).append( html );
};

////////// EXERCISE 1  -- ANSWER LOGGER

/*Write a function answer_logger that takes a function as input, runs it, and places the return value from that function
 invocation into a div#answer*/

var name = prompt( "What is your name: " );
var html = '<h2>ANSWER LOGGER</h2>';
//this function takes two parameter, a function and a string. The function parameter is called( invoked ) inside the p tags
// and takes an argument of the string parameter
var answer_logger = function( func, string ) {
  html += '<p>' + func( string ) + '</p>';
  $( '#answer' ).append( html );
};

var myName = function( name ) {
  return name;
};

//this calls the answer_logger function and passes as argument the myName function and the string value of name which will
//be passed as an argument into the myName function
answer_logger( myName, name );

html = "";//resets html so that the header doesnt appear again
//this is another way the function can be called and the same purpose is served
var answer_logger1 = function( func ) {
  html += '<p>' + func() + '</p>';
  $( '#answer' ).append( html );
};

answer_logger( function() {
  return "This is passed inside the answer_logger";
} );


////////// EXERCISE 2  -- ANSWER COLLECTOR

/*Write a function answer_collector that takes an array of functions as an input and runs each of them, in turn. Each time
 you run a function, collect its return value and add it to a results_array. Return the results array from answer_collector.*/

html = "";//resets html

//this function takes an array of functions as a parameter
var answer_collector = function( functionsArray ) {
  var resultsArray = [];
  var len = functionsArray.length;

  //runs through each item in the array of functions and calls each function which pushes its return value to the resultsArray
  for( var i = 0; i < len; i++ ) {
    resultsArray.push( functionsArray[ i ]() );
  }
  return resultsArray;
};

var firstFunction = function() {
  return "this is the first function";
};

var secondFunction = function() {
  return "this is the second function";
};

var thirdFunction = function() {
  return "this is the third function";
};

//an array of functions
var functionsArray = [ firstFunction, secondFunction, thirdFunction ];

console.log( answer_collector( functionsArray ) );

//this is another way of achieving the same thing as above
answer_collector = function() {
  var resultsArray = [];
  var len = arguments[ 0 ].length;
  for( var i = 0; i < len; i++ ) {
    resultsArray.push( arguments[ 0 ][ i ]() );
  }
  return resultsArray;
};

html = '<h2>ANSWER COLLECTOR</h2>' + listCreator( answer_collector( functionsArray ) );

htmlAppender( '#answer', html );


////////// EXERCISE 3  -- SECRET KEEPER

/* Write a function secret_keeper that defines a variable secret inside its code block.
 Try to access the secret variable from outside the function scope using your JS console. Make sure it's safe!
 Allow the user to invoke secret_keeper with two strings as arguments
 $().append() the two strings to the page with the secret word in between */

var secret_keeper = function( string1, string2 ) {
  var secret = "<span class=\"highlight\"> secret</span>";
  return string1 + " " + secret + " " + string2;
};

var firstString = "This is my";
var secondString = "word";

html = '<h2>SECRET KEEPER</h2><p>' + secret_keeper( firstString, secondString ) + '</p>';

htmlAppender( '#answer', html );



////////// EXERCISE 4  -- MULTIPLIES BY

/*Write a function multiplies_by that takes a number as input and returns a function that, when invoked with a second
number as an argument multiplies the two numbers together.*/

//this function takes a number and returns a number that is stored in the local variable num
var multiplies_by = function( num ){
  return function ( num2 ){
    return num + " x " + num2 + " = <span class='highlight'>" + (num * num2) + "</span>";
  }
};

//secondNumber stores the return function from multiplies_by with a number stored in the num variable
var secondNumber = multiplies_by( 3 );
html = '<h2>MULTIPLIES BY</h2><p>' + secondNumber( 5 ) + '</p>';

htmlAppender( "#answer", html);