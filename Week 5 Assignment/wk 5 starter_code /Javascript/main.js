$(document).ready(function() {


  var updateCity = function(event) {

    event.preventDefault();
    var city = $('#city-type').val();
    var lowerCase = city.toLowerCase();

  if (lowerCase === "nyc" || lowerCase === "new york city") {
    $('body').css('background-image', 'url(images/nyc.jpg)');
  } else if (lowerCase === "la") {
      $('body').css('background-image', 'url(images/la.jpg)');
  }   else if (lowerCase === "sf") {
          $('body').css('background-image', 'url(images/sf.jpg)');
  } else if (lowerCase === "sydney") {
      $('body').css('background-image', 'url(images/sydney.jpg)');
  } else if (lowerCase === "austin") {
          $('body').css('background-image', 'url(images/austin.jpg)');
  }

}

  $('form').submit(updateCity);
});

/* var cities = ['sf', 'austin', 'la', 'sydney', 'nyc'];
  cities.forEach(function(city) {
  if (lowerCase === city) {
    $('body').css('background-image', 'url(images/' + city + '.jpg)');
  }
});
*/
