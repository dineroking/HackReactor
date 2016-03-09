/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/13/16
 * Time: 3:08 PM
 * Content:
 */

var products = [{
  name: "Go Set a Watchman",
  category: "books",
  selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
  price: 25,
  picture_url: "https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
}, {
  name: "Twilight",
  category: "books",
  selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
  price: 9.99,
  picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
}, {
  name: "How to Win Friends & Influence People",
  category: "books",
  selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
  price: 8,
  picture_url: "http://htmlgiant.com/wp-content/uploads/2013/11/HowtoWinFriendsandInfluencePeopleCover.jpg"
}, {
  name: "Dark Side of the Moon",
  category: "music",
  selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
  price: 100,
  picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
}, {
  name: "Thriller",
  category: "music",
  selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
  price: 19,
  picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
}, {
  name: "Ella & Luis",
  category: "music",
  selling_points: ["How could you not?", "Seriously, though..."],
  price: 110,
  picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
}];


//first: Pass _.first() the array of products and display the returned object in a "featured" section of your site.

var returnedObj = _.first( products );
console.log( returnedObj );

var html = '';
_.each( returnedObj, function( value, prop ){
  html += '<p>' + prop + ' : ' + value + '</p>';
} );
$('#featured').append( html );


//last: Pass _.last() the array of products and display the returned object in a "clearance" section of your site.

html = '';
_.each( _.last( products ), function( value, prop ){
  html += '<p>' + prop + ' : ' + value + '</p>';
});

$('#clearance').append( html );