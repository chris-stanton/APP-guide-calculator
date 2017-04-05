myApp.controller('MainController', [function() {

  console.log('MainController running');

  var self = this;
self.message = "this works";

// all();

// function all() {
// seatDist();
// runGuide();
// stripGuide();
// }

// //Need to add reduction guides

// var reel = 3.27; //Shimano Sahara 1000 DIMs
// var rodLength = 78; //6'6" blank in inches
// var guide1 = 4;  //Inches measurement


// function seatDist() {
//   var seatLength = rodLength / 5.3;
//   console.log("Epoxy center of reel seet " + seatLength + " inches from the butt of the rod blank.");
//   //alert("Epoxy center of reel seet " + seatLength + " inches from the butt of the rod blank.");
// }

// function stripGuide() {
//   var stripPlace = reel * 9.719;
//   console.log("Measure and place stripper guide " + stripPlace + " inches from the center pin of reel.");
//   //alert("Measure and place stripper guide " + stripPlace + " inches from the center pin of reel.");
// }

// function runGuide() {
//   var guide2 = guide1 + 0.4;
//   var guide3 = guide2 + 0.53;
//   var guide4 = guide3 + 0.68;
//   var guide5 = guide4 + 0.75;
//   console.log("Measuring down from tip top, place 1st running guide " + guide1 + " inches from the tip top." + " Place 2nd running guide down " + guide2 + " inches from previous guide." + " Place 3rd running guide down " + guide3 + " inches from previous guide." + " Place 4th running guide down " + guide4 + " inches from previous guide." + " Place 5th running guide down " + guide5 + " inches from previous guide.");
//   //alert("Measuring down from tip top, place 1st running guide " + guide1 + " inches from the tip top." + " Place 2nd running guide down " + guide2 + " inches from previous guide." + " Place 3rd running guide down " + guide3 + " inches from previous guide." + " Place 4th running guide down " + guide4 + " inches from previous guide." + " Place 5th running guide down " + guide5 + " inches from previous guide.");
// }




}]);//end og myApp()