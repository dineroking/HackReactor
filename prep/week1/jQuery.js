/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/5/2016
 * Time: 5:01 PM
 * Content:
 */

/*
$('body').css('background-color', 'red');
$('img').attr('src', 'http://i.imgur.com/nWGCwiE.gif');

$('h1').text('hello');
$('#notification').html('<div class="alert container">Hold on! <b>an error</b> has occurred!</p>');
$('.container').append("<p>What's the difference between <i>.append()</i> and .html()?</p>");
//.html replaces all previous content in the matched selector
//$('#notification').html('<div class="alert container">Hold on! <b>an error</b> has occurred again!</p>');
*/

/*
$('h1').css('color', 'blue');
$('body').css('background', 'red');
$('#everything').css('font-size', 'larger');
*/
/*
var color = prompt('Please enter a color: ').toLowerCase();
var theme = ['red', 'green', 'blue', 'yellow'];

while( color !== 'stop' ){
  var found = false;
  for(var i = 0; i < theme.length; i++){
    if( theme[i] === color ) {
      $('body').css({'background' : 'light' + color, 'color' : '' + color, 'border' : '5px solid dark' + color} ).fadeOut(3000 ).fadeIn(3000);
      found = true;
      break;
    }
  }
  if(found)
    break;
  var color = prompt('Please enter a color: ').toLowerCase();
}
*/

//$('body' ).css('height', '800px');
$('div#thing').slideDown(3000, function(){
  $('#message').slideUp(3000, function(){
    $(this ).slideDown(3000);
  });
});

$('#thing').click(function(){
  $('#message').slideToggle(2000);
});

var new_div = $('<div>This is a new div.</div>');

new_div.css('color', 'purple').attr('class', 'important').text('This text replaces the text inside');

$('body').append(new_div);