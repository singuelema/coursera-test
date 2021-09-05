

/* Immediatly invoked function IIFE: 
(function(){
  
})(); */
( function (){

  //Variable containing an Array of names)
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// A for loop that loops through the array of names
for ( var i = 0; i < names.length; i++) {

//An if statement that check through the array to check the condition

  if (names[i].charAt(0).toLowerCase() === 'J') {

    byeSpeaker(names[i]);

  }

   else {

    helloSpeaker(names[i]);

  }
}
}
  
)();

