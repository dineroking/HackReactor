/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 5/17/16
 * Time: 4:38 PM
 * Content:
 */

var midnight = new Date( "August 19, 2016 00:00:00" ).getTime();

var now, p = $( "p" ), timeLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft, hour = 1000 * 60 * 60, minute = 1000 * 60, second = 1000;

setInterval( function(){
  now = new Date().getTime();
  timeLeft = midnight - now;
  daysLeft = Math.floor( timeLeft / (hour * 24 ) );
  hoursLeft = Math.floor( timeLeft / hour ) % 24;
  minutesLeft = Math.floor( ( timeLeft / minute ) % 60 );
  secondsLeft = Math.floor( ( timeLeft / second ) % 60 );

  p.text( "Time left to my birthday - " + daysLeft + "d : " + hoursLeft + "h : " + minutesLeft + "m : " + secondsLeft + "s" );
}, 500 );

console.log( midnight );

var me = {
  name : "myName",
  age : 19,
  birthday : "August 19, 1982 07:44:00",
  hometown : "Houston",
  occupation : "Pilot"
};

var getTimeSince = function( startTime ){
  var elapsedTime = new Date().getTime() - new Date( startTime ).getTime();
  var years = Math.floor( elapsedTime / ( 1000 * 60 * 60 * 24 * 365 ) );
  var months = Math.floor( elapsedTime / ( 1000 * 60 * 60 * 24 * 30 ) / 12 );
  return months;
};

console.log( getTimeSince( me.birthday ) );


// Exercise 3  -  Personal Info

var Person = function( name, age, birthday, hometown ){
  this.name = name;
  this.age = age;
  this.birthday = birthday;
  this.hometown = hometown;
  this.about = function(){
    return "My name is " + this.name + ". I was borne " + this.birthday + " which makes me " + this.age +
      ". I live in " + this.hometown + "."
  }
};

var myself = new Person( "Ronny", 33, "08/19/1982", "Houston" );
console.log( myself.about() );
var son = new Person( "Stranger", 55, "July 1, 1961", "Tokyo" );
console.log( son.about() );

// testing adding methods

var Maths = function( num1, num2, num3 ){
  var numbers = [ num1, num2, num3 ];
  this.max = maximum();
  this.add = function(){
    return numbers.reduce( function( result, num ){
      return result + num;
    }, 0 );
  };

  function maximum(){
    return Math.max.apply( null, numbers );

  }
};

var primes = new Maths( 3, 5, 7 );
console.log( primes.add() );
console.log( primes.max );

// MANIPULATING THE DOM

