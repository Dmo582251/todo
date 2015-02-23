// This is our js file.  This is where we will write all of our javascript.

// We will be using jquery for easier dom manipulation.

// The first thing we need to do, in order to manipulate the dom, is to check if the dom
// is "ready" - if it is loaded by the browser.


// A $( document ).ready() block.
$( document ).ready(function() {

  // This line calls the "sayHello" function.
  sayHello();


  // This syntax means...
  // select the 'task-mark-remove' element
  // when you click on it
  // do all the stuff inside my function that's named 'removeItem'.
  
  // we aren't using the same syntax as when we called our 'sayHello' function,
  // because that would make it run without being called (the functionName() syntax means to call that function!)
  
  $('.task-mark-remove').on('click',removeItem);
  
  
  // This syntax means...
  // select the 'task-mark-remove' element
  // when you click on it
  // do all the stuff inside my function that i'm creating right here.
  $('.task-mark-remove').on('click',function(){
    console.log('This is coming from the second example of doing things on click');
  });
  

});




// Outside of our document ready block, we can create functions.
// Then we can call them from within our document ready block.

function sayHello(){
  console.log('The document is ready');
}


function removeItem(){
  console.log('This is coming from the first example of doing things on click.  This console log is coming from the "removeItem" function');
}