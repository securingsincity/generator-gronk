var oboe = require('oboe');

module.exports = function () {
  //call a remote api
  oboe('/things.json')
   .node('foods.*', function( foodThing ){

      // This callback will be called everytime a new object is
      // found in the foods array.

      console.log( 'Go eat some', foodThing.name);
   })
   .node('badThings.*', function( badThing ){

      console.log( 'Stay away from', badThing.name);
   })
   .done(function(things){

      console.log(
         'there are', things.foods.length, 'things to eat',
         'and', things.nonFoods.length, 'to avoid');
   });
 };
