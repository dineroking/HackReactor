/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 5/2/16
 * Time: 9:16 AM
 * Content:
 */

$( document ).ready( function(){
  //JavaScript and jQuery inside here

  $( "button" ).on( "click", function(){

    console.log( "color:", $( "[type=color]" ).val() );
    console.log( "date:", $( "[type=date]" ).val() );
    console.log( "datetime:", $( "[type=datetime]" ).val() );
    console.log( "datetime-local:", $( "[type=datetime-local]" ).val() );
    console.log( "file:", $( "[type=file]" ).val() );
    console.log( "month:", $( "[type=month]" ).val() );
    console.log( "search:", $( "[type=search]" ).val() );
    console.log( "tel:", $( "[type=tel]" ).val() );
    console.log( "time:", $( "[type=time]" ).val() );
    console.log( "url:", $( "[type=url]" ).val() );
    console.log( "week:", $( "[type=week]" ).val() );

  } );

  // SIGN UP FORM

  /*$("button[type=submit]").on("click", function(){
    $("form#userSignUp").show(3000);
    $(this).remove();
    $("form#userSignUp").append("<button type='submit'>Sign Up!</button>");
  } );*/
} );