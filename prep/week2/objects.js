/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/10/2016
 * Time: 8:50 PM
 * Content:
 */

var dream_car = {};

dream_car.make = "BMW";
dream_car.model = "700 series";
dream_car.color = "space gray";
dream_car.year = 2016;
dream_car.registered = true;

var html = "<ul>";

for(var prop in dream_car){
  html += "<li>" + prop + " : " + dream_car[prop] + "</li>";
}

html += "</ul>";

$('#result').append(html);
var name = "El FEO";

alert(name);
