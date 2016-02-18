/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/11/16
 * Time: 6:16 PM
 * Content:
 */

var windowHeight = $(window).height() - ($('header').height() + $('footer').height());
$('#mainNav a').click(function() {
  if($(this).parent().hasClass("active")) {
    $("#mainNav a").parent().removeClass("active");
    $("#mainSection").slideUp(1000);
    $("#productNav").slideUp(1000);
  } else {
    $("#mainNav a").parent().removeClass("active");
    $(this).parent().addClass("active");
    $("#mainSection").slideDown(1000, function() {
      $(this).height(windowHeight);
    });
    $("#productNav").slideDown(1000, function() {
      $(this).height("75px");
    });
  }
});


var obj = {
  image : "http://www.uglydogbooks.com/wp-content/uploads/2014/04/books.jpg"
}
var html = "<ul>";

for(var prop in obj){
  if(prop === "image"){
    html += "<li><img src='" + obj[prop] + "' width='200' height='250'><ul><li>ADD</li><li>INFO</li></ul></li>";
  }
}
html += "<ul>";

$('#products').append( html );