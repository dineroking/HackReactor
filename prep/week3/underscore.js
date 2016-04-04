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


//filter: Use _.filter() to display only products that belong to the "books" category.

var books = _.filter( products, function( obj ){
  return obj.category === 'books';
});

html = '';
_.each( books, function( val, index ){
  html += '<ul>';
  _.each( val , function( value, prop ){
    html += '<li>' + prop + ' - ' + value + '</li>';
  } );
  html += '</ul>';
});

$('#books').append( html );


//reject: Use _.reject() to display only products that are priced below $20.

var cheapProducts = _.reject( products, function( obj ){
  return obj.price >= 20;
} );

html = '';

_.each( cheapProducts, function( val, index ){
  html += '<ul>';
  _.each( val , function( value, prop ){
    html += '<li>' + prop + ' - ' + value + '</li>';
  } );
  html += '</ul>';
});

$('#cheapProducts').append( html );


//uniq: Use _.uniq() to ensure that their are no duplicate selling points in any products before displaying them.

var sellingPoints = [];
_.each( products, function( obj ){
  obj.selling_points = ( _.uniq( obj.selling_points ) );
});

console.log( products[ 1 ].selling_points );


//map: Use _.map() to grab the picture_url of all products for sale, assign each to the src property of a new <img> tag and return that DOM element. Pass the result of calling _.map() directly into a $('#container').append() expression to create a photo montage.

var allPhotos = _.map( products, function( obj ){
  return '<img src="' + obj.picture_url + '">'
} );

$('#photos' ).append( allPhotos );//append recognizes arrays

console.log( allPhotos );

//pluck: Use _.pluck() to quickly retrieve a list of the names of all products for sale to list them in an index

console.log( _.pluck( products, 'name') );

//reduce: Pass a shopping cart (array of objects) to _.reduce() and use it to add up the total price of the order.

console.log( _.reduce( products, function( total, item ){
  return total + item.price;
}, 0 ) );


//contains: Determine if the order _.contains() a copy of 'Twilight'. If so, display a drastic message to the user asking them to re-evaluate their life choices.

_.each( products, function( product ){
  if(_.contains( product, 'Twilight' ) )
    console.log( 'that is not a very good choice', product );
});

//every: Use _.every() to determine if every item in the order has a price tag less than $10. If so, call the user a cheapskate!

var cheap = _.every( products, function( product ){
  return product.price < 10;
} );

console.log( cheap ? 'Wow, you sure are cheap' : 'Ok. At least you are not so cheap' );

//some: Use _.some() to determine if any item in the order has a price tag of $100 or more. If so, chide the user for their profligacy!

var expensive = _.some( products, function( product ){
  return product.price > 100;
});

console.log( expensive ? 'Look at you, big expender.' : 'Go ahead and buy some more stuff.');

var extended = _.extend( { name : 'Ronny', last : 'Rosabal'}, { age : 33 } );

console.log( extended );