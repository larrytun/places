//business logic

function Destination(destination, location, landmark, time, notes, weather) {
  this.firstDestination = destination;
  this.firstLocation = location;
  this.firstLandmark = landmark;
  this.firstTime = time;
  this.firstNotes = notes;
  this.firstWeather = weather;
}

// user interface logic

$(document).ready(function() {
  $("form#destination-info").submit(function(event) {
    event.preventDefault();

    var inputtedDestination = $("#new-destination").val();
    var inputtedLocation = $("#new-location").val();
    var inputtedLandmark = $("#new-landmarks").val();
    var inputtedTime = $("#new-time-of-year").val();
    var inputtedNotes = $("#new-notes").val();
    var inputtedWeather = $("#new-weather").val();

    var newDestination = new Destination(inputtedDestination, inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes, inputtedWeather);

    console.log(newDestination);

    $("ul#places").append("<li><span class='destination-blah'>" + newDestination.firstDestination + "</span></li>");

    $(".destination-blah").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newDestination.firstDestination);
      $(".destination").text(newDestination.firstDestination);
      $(".location").text(newDestination.firstLocation);
      $(".landmarks").text(newDestination.firstLandmark);
      $(".time-of-year").text(newDestination.firstTime);
      $(".notes").text(newDestination.firstNotes);
      $(".weather-that-day").text(newDestination.firstWeather);
});
    $("input#new-destination").val("");
    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time-of-year").val("");
    $("input#new-notes").val("");
    $("input#new-weather").val("");

  });
});
