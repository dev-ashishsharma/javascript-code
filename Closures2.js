//------CLOSURES IN ASYNC CALLBACKS---------------
var i;

var print = function() {
  console.log("Print i " + i);
};

for (i=0 ; i<10; i++) {
  // This prints 10, 10 times.
  // Set timeout has multiple calls registered. It queues us the calls. The loop keeps running
  // Meantime i is 10 as the global value got modified in that 1 second. Hence 
  // it prints i 10 times.
  setTimeout(print, 1000);
}

// -----HOW TO PREVENT THIS-----
// Problem here is there is one copy of i. 
// what we want is for print to point to different vallues of i. to print correctly.
// value contained in i when setTimeout is called.
// Multiple values is created in function.

var j;

for (j=0 ; j<10; j++) {
 (function(currentJ) {
   // Store each value of i, as due to function scope. There are 
   // 10 values of i as each iteration currentJ is new and stores iteration value.
    // var currentJ = j;
   // Call anonyous function with j value and use that as storing.
   setTimeout(function() {
     console.log("Print j " +currentJ); }, 1000);
 })(j);
}












