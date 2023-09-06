const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
      } else {
        return false; // It's not a leap year
      }
};
// Had trouble with this one. My logic was correct. But bc I was used to python I forgot Booleans aren't numeric types.

// They in fact are truthy or falsely. I did look at the solution to help me with the syntax and tried to incoorporate it in my own way
// Do not edit below this line
module.exports = leapYears;
