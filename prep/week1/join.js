/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/4/2016
 * Time: 9:15 PM
 * Content:
 */

/*
var n = 10;
var result = '';
var i = 1;
while( i <= n ){
  if( i === n){
    ( i % 2 === 0 ) ? result += '<p class="even">' + i + ' ' + '</p>' : result += '<p class="odd">' + i + ' ' + '</p>';
    break;
  }
  ( i % 2 === 0 ) ? result += '<p class="even">' + i + ', ' + '</p><hr>' : result += '<p class="odd">' + i + ', ' + '</p><hr>';
  i++;
}
document.querySelector('#target').innerHTML = result;
*/

/*
var n = 10, product = 1;

while( n > 0 ){
  product *= n;
  n--;
}
document.querySelector('#target').innerHTML = "N was " + n +". The product of all intejkasd";
console.log(product);
*/

/*
var n = 0;

while ( n <= 20 ) {
	if (n !== 13) {
		console.log((n%2 !==0) ? "I like the number " + n + ", odd is okay too!" : "I like the number " + n + ", a nice even number.");
	}else{
    console.log("la-la-la, nothing to say here");
	}
	n++;
*/
/*

var i = 1,
  max = 100,
  string = '';

while( i <= max){
  if( i % 3 === 0 && i % 5 === 0){
    string += '<span class="fizzbuzz"> fizzbuzz </span>';
  }else if( i % 3 === 0 ){
    string += '<span class="fizz"> fizz </span>';
  }else if( i % 5 === 0){
    string += '<span class="buzz"> buzz </span>';
  }else {
    string += i + ' ';
  }
  i++;
}
document.getElementById('target').innerHTML = string;
*/

var n = 10;
var i = 1;
var string = '';

while( i <= n ){
  if( i === 1){
    string = "welcome " + i;
  }else{
    string = "welcome " + i + ", meet " + 1;
    var j = 2;
    while( j < i){
      if( j === i - 1 ){
        string += " and " + j;
      }else {
        string += ", " + j;
      }
      j++;
    }
  }
  console.log(string);
  i++;
}

