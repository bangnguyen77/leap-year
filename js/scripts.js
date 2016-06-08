$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var leapYear = function(yearInput) {
      // in "if" !yearInput filters strings because parseInt returns NaN, which is "falsy"
      // if we have strings after the number (eg "2004era") then !yearInput is false, because parseInt will return 2004 which IS true, so not (!) will advance to the next condition.  Then variable 'yearNumTest' is evaluated which uses Number() which returns Nan if there are any non-number characters.  It returns Nan which is false, so !false is true.
      // if we have a float (eg 2004.123), it fails the first two conditions and then is tested for NOT having a remainder of 0 with modulo 1.  Any whole number will have no remainder and any float will have a remainder of 0.'decimals' (eg 0.123)
      if (!yearInput || !yearNumTest || (yearNumTest % 1 !== 0) ) {
        return '<h1>This was not a valid year. Please try again.</h1>';
      } else if ( (yearInput % 4 === 0) ) {
        return "The year " + yearInput + " is a leap year.";
      } else {
        return "The year " + yearInput + " is not a leap year.";
      }
    }
    var yearNumTest = Number($("input#year").val());
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").html("<h1>" + result + "</h1>");
    event.preventDefault();
  });
});
