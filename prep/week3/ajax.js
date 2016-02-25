/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/22/2016
 * Time: 9:32 PM
 * Content:
 */


//   ASYNCHRONOUS JavaScript And XML
/*{
  coord: {
    lon: -122.42,
      lat: 37.77
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02n"
    }
  ],
    base: "cmc stations",
  main: {
  temp: 55.98,
    pressure: 1025.71,
    humidity: 73,
    temp_min: 55.98,
    temp_max: 55.98,
    sea_level: 1034.06,
    grnd_level: 1025.71
},
  wind: {
    speed: 4.41,
      deg: 6.50122
  },
  clouds: {
    all: 20
  },
  dt: 1456198330,
    sys: {
  message: 0.0049,
    country: "US",
    sunrise: 1456238977,
    sunset: 1456279019
},
  id: 5391959,
    name: "San Francisco",
  cod: 200
}
*/

/*The following is an example of how ajax works. The get operation send the url with the API id at the end of it. If
* the get operation is successful then it passes the callback function which has a parameter where the return data is
* to be held. In this case the data return is in the form of JSON (JavaScript Object Notation) as shown above. Using
* jQuery the data is used to be displayed on the page, in this case the "temp" from the main property as well as "speed"
* from the wind property. */

var to_be_run_on_server_response = function( weather_data ){
  $('#wxContainer').append( 'Temp: ' + weather_data.main.temp,  '<br>Wind Speed: ' + weather_data.wind.speed );
};

$.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e')
  .success( to_be_run_on_server_response );


/*This is another way to do the same thing as above but also passing the property dataType: 'json' which tells the request
* to return the data as a json file*/

/*$.ajax({
 method: 'GET’,
 dataType: ‘json’,
 url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e',
 success: appendCityData
 }
 });*/

/*Exercise 1: Create a simple weather page that shows the following data.

current temperature
today's high and low temperatures
the description of current weather conditions
current wind speed
The time of sunrise and sunset. (hint: new Date(weatherData.sys.sunrise * 1000) )
*/

var houstonWx = function( wxData ){
  //console.log(JSON.stringify(wxData, null, 2));//formats json data into more readable format
  var sunrise = new Date(wxData.sys.sunrise * 1000);
  var sunset = new Date(wxData.sys.sunset * 1000);
  var wx = [wxData.main.temp, wxData.main.temp_max, wxData.main.temp_min, new Date(wxData.sys.sunrise * 1000), new Date(wxData.sys.sunset * 1000)];
  var html = '<ul>';
  wx.forEach(function( item ){
    console.log( item );
    html += '<li>' + item + '</li>';
  });
  html;
  $('aside').append(html);
};

$.ajax({
  method : 'GET',
  dataType : 'json',
  url : 'http://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e',
  success : houstonWx
});