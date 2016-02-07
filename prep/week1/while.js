/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/4/2016
 * Time: 3:09 PM
 * Content: while
 */

/*
var n = 100, song = '<ul class=lyrics>';
while(n >= 0){
  if( n !== 0){
    song = song + '<li>' + n + ' bottle' + (n === 1 ? '' : 's') + 'of beer on the wall! chug, chug, chug';
  }else{
    song += '<li> no bottles of beer! stumble, stumble, stumble...<li>';
  }
  n--;
}

document.querySelector('#lyrics').innerHTML = song;
*/
/*var n = 100,
  i = 1,
  result = ' ';

while( i <= n ){
  if( i === n){
    result += '<p>' + i + '</p>';
    break;
  }
  ( i % 2 === 0 ) ? result += '<p class="even">' + i + ', ' + '</p><hr>' : result += '<p>' + i + ', ' + '</p><hr>';
  i++;
}

document.querySelector('#target').innerHTML = result;*/

/*Exercise: Cumulative Sum

 Write a while loop that computes the product of multiplying the first n positive integers: product = 1 * 2 * 3 * ... * n.
 Use .innerHTML to place a formatted piece of text into the HTML document that explains what n was and what the product of the numbers computed to.
 Give the tags different classes and ids that match pre-written CSS with some styling to make it a bit prettier.
 */
var n, product, result;
document.querySelector('#submit').onclick = function(){
  n = parseInt(document.querySelector('#input').value);
  var i = 1;
  while( i <= n){
    product *= i;
    i++;
  }
  result = 'the number you entered was ' + n + ', and the product is ' + product;
  document.querySelector('#result').innerHTML = result;
};



