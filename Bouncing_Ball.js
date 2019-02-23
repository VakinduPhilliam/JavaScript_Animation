
/* For animations that CSS can’t handle well, or those that need tight control, JavaScript can help. JavaScript 
animations should be implemented via requestAnimationFrame. 
That built-in method allows to setup a callback function to run when the browser will be preparing a repaint. 
Usually that’s very soon, but the exact time depends on the browser.
When a page is in the background, there are no repaints at all, so the callback won’t run: the animation will be suspended and won’t consume resources. */



/* EXAMPLE I* /

//Gravity (Ball Bouncing)

//Make a bouncing ball. 


let to = field.clientHeight - ball.clientHeight; 


animate({

  duration: 2000,

  timing: makeEaseOut(bounce),

  draw(progress) {

    ball.style.top = to * progress + 'px'

  }

});




/* EXAMPLE II */

// Make the ball bounce to the right.


let height = field.clientHeight - ball.clientHeight;
let width = 100;

// animate top (bouncing)

animate({

  duration: 2000,

  timing: makeEaseOut(bounce),

  draw: function(progress) {

    ball.style.top = height * progress + 'px'

  }

});

// animate left (moving to the right)

animate({

  duration: 2000,

  timing: makeEaseOut(quad),

  draw: function(progress) {

    ball.style.left = width * progress + "px"

  }

});

