// NOTES: Standard Function Definition

// REQUIRE: lodash/underscore
// FUNCTION: Find all the peaks in a given array.
// INPUT: Array
// RETURN: index, peak/value within array
//   EX: [2,5]
// ERROR: false

// TIME_COMPLEXITY: O(n)
var peakFinder = function(array) {
  // instantiate an array as result
  var result = [];
  // iterate over input
  _.each(array, function(val,key,col){
    // check left and right neighbors
    if(col[key+1] < val && col[key-1] < val) {
      // add information to results array
      result.push([key,val]);
    }
  });
  // ternary check: if results array is not empty give result array, else give false
  return result.length ? result : false;
};

// NOTES: Prototypical Inheritance

// REQUIRE: lodash/underscore
// FUNCTION: Find all the peaks in a given array.
// INPUT: context/this
// RETURN: index, peak/value within array
//   EX: [2,5]
// ERROR: false

// TIME_COMPLEXITY: O(n)
Array.prototype.findPeaks = function() {
  // instantiate an array as result
  var result = [];
  // iterate over input
  _.each(this, function(val,key,col){
    // check left and right neighbors
    if(col[key+1] < val && col[key-1] < val) {
      // add information to results array
      result.push([key,val]);
    }
  });
  // ternary check: if results array is not empty give result array, else give false
  return result.length ? result : false;
};