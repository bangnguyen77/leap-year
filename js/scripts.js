$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var leapYear = function(yearInput) {
      if (!yearInput || !Number($("input#year").val()) || (yearFloatTest % 1 !== 0) ) {
        return '<h1>This was not a valid year. Please try again.</h1>';
      } else if ( (yearInput % 4 === 0) ) {
        return "The year " + yearInput + " is a leap year.";
      } else {
        return "The year " + yearInput + " is not a leap year.";
      }
    }
    var yearFloatTest = Number($("input#year").val());
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").html("<h1>" + result + "</h1>");
    event.preventDefault();
  });
});
