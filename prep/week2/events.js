/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/9/2016
 * Time: 4:00 PM
 * Content:
 */
/*
//generates a random number between 0 and 1 and adds it to #
var random = '#' + Math.random();
console.log(random);
//same as above but this time it converts it into a string before adding it
random = '#' + Math.random().toString();
console.log(random);
//same as above but uses a radix of 16 which converts number into hexadecimal
random = '#' + Math.random().toString(16);
console.log(random);
//same as above but it also slices the newly converted string beginning at the character after the decimal
random = '#' + Math.random().toString(16).slice(2, 8);
console.log(random);*/


var recipe = ['add sugar', 'add flower', 'add water'];
var bucket_list = ['be happy', 'eat well', 'be a good father'];

var html = "<ul>";
var i = 0;

while( i < recipe.length){
  html += "<li>" + recipe[i] + "</li>";
  i++;
}

html += "</ul>";

$('#recipe').append(html);



///////////////////////////////////////////////
html = "<ol>";
i = 0;

while( i < bucket_list.length){
  html += "<li>" + bucket_list[i] + "</li>";
  i++;
}

html += "</ol>";

$('#bucket_list').append(html);