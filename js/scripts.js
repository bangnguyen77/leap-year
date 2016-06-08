$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var leapYear = function(yearInput) {
      if (!year) {
        $("#result h1").text('this was not a valid number, please try again');
      } else if ( (yearInput % 4 === 0) ) {
        return true;
      } else {
        return false;
      }
    }
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result h1").text(result);
    event.preventDefault();
  });
});
