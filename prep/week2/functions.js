/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/8/2016
 * Time: 5:40 PM
 * Content:
 */

var myFunction = function() {
  console.log("I'm inside the function.js");
  console.log("The time is: ", new Date());
};

myFunction();
myFunction();

var div = $('<div id="output"></div>');
$('body').append(div);
var htmlOutput = function() {
  var string = "this is a string <br>";
  $('#output').append(string);
};

function log_and_return() {
  var args = "";
  for(var i = 0; i < arguments.length; i++) {
    if(i === arguments.length - 1) {
      args += arguments[i];
    } else {
      args += arguments[i] + ", ";
    }
  }
  console.log(args);
  return args;
}

var return_values = log_and_return();

var tripler = function(x) {
  return x * x * x;
};

var multiply = function(a, b) {
  return a * b;
};

var divide = function(a, b) {
  return a / b;
};

var remainder = function(a, b) {
  return a % b;
};

var result = remainder(divide(multiply(tripler(5), 12), 2), 3);

console.log(result);

var string_printer = function(string) {
  $('#output').text(string);
};

var funny_sentence = function(noun, adjective, verb, adverb) {
  var html = "<p><span class='noun'>" + noun + "</span> is <span class='adjective'>" + adjective + "</span> to <span class='verb'>"  +
      verb + "</span> and is <span class='adverb'>" + adverb + "</span></p>";
  $('#output').append("html: " + html);
};

funny_sentence( "Car", "runs", "beautiful", "shinely");

var factoral_of_n = function( n ){
  var result = 1;
  var i = 1;
  while( i <= n ){
    result *= i;
    i++;
  }
  return result;
};

console.log( factoral_of_n( 5 ));