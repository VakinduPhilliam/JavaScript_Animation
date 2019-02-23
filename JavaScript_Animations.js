/* JavaScript Animations and Mathematical Implementations of everyday Instances */
/* JavaScript animations can handle things that CSS can’t. */
/* For instance, moving along a complex paths, like Bow paths, water splash */
/* Compiled by Vakindu Philliam */



/* EXAMPLE I */

//The pseudo-code of a JavaScript Animation can look like this:
//Demonstrating how to create a JavaScript Animation

let timer = setInterval(function() {

  if (animation complete) clearInterval(timer);

  else increase style.left by 2px

//Change by 2px every 20ms, about 50 frames per second

}, 20); 




/* EXAMPLE II */

//Building a simple timer Clock

let start = Date.now(); 

// remember start time

let timer = setInterval(function() {

  // how much time passed from the start?

  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {

  // finish the animation after 2 seconds

    clearInterval(timer); 

    return;

  }

  // draw the animation at the moment timePassed

  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000

// left gets values from 0px to 400px

function draw(timePassed) {

  train.style.left = timePassed / 5 + 'px';

}




/* EXAMPLE III */

//Structured animation

//Making a more universal animation function based on requestAnimationFrame:

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {

    // timeFraction goes from 0 to 1

    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state

    let progress = timing(timeFraction)

    draw(progress); 

   // draw it

    if (timeFraction < 1) {

      requestAnimationFrame(animate);

    }

  });
}




/* EXAMPLE IV */

//Simple Linear timing function

animate({

  duration: 1000,

  timing(timeFraction) {

    return timeFraction;

  },

  draw(progress) {

    elem.style.width = progress * 100 + '%';

  }

});




/* EXAMPLE V */

//Power of n (linear timing function)

//If we want to speed up the animation, we can use progress in the power n.

//For instance, a parabolic curve:


function quad(timeFraction) {

  return Math.pow(timeFraction, 2)

}




/* EXAMPLE VI */

//The arc (linear timing function)


function circ(timeFraction) {

  return 1 - Math.sin(Math.acos(timeFraction));

}




/* EXAMPLE VII */

//Bow Shooting (linear timing function)

//This function does the “bow shooting”. First we “pull the bowstring”, and then “shoot”.

//Unlike previous functions, it depends on an additional parameter x, the “elasticity coefficient”. 

//The distance of “bowstring pulling” is defined by it.


function back(x, timeFraction) {

  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)

}



/* EXAMPLE VIII */

//Bouncing Ball Effect (linear timing function)

//Imagine we are dropping a ball. It falls down, then bounces back a few times and stops.

//The bounce function does the same, but in the reverse order: “bouncing” starts immediately. 

//It uses few special coefficients for that:


function bounce(timeFraction) {

  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {

    if (timeFraction >= (7 - 4 * a) / 11) {

      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)

    }
  }
}




/* EXAMPLE IX */

//Elastic animation (linear timing function)

//One more “elastic” function that accepts an additional parameter x for the “initial range”.

function elastic(x, timeFraction) {

  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)

}




/* EXAMPLE X */


//Reversal: ease (linear timing function)

//The direct application of timing functions is called “easeIn”.

//Sometimes we need to show the animation in the reverse order. That’s done with the “easeOut” transform.


//easeOut

//In the “easeOut” mode the timing function is put into a wrapper timingEaseOut:


timingEaseOut(timeFraction) = 1 - timing(1 - timeFraction)


//In other words, we have a “transform” function makeEaseOut that takes a “regular” timing function and returns the wrapper around it:

// accepts a timing function, returns the transformed variant



function makeEaseOut(timing) {

  return function(timeFraction) {

    return 1 - timing(1 - timeFraction);

  }

}


//For instance, we can take the bounce function described above and apply it:

let bounceEaseOut = makeEaseOut(bounce);




/* EXAMPLE XI */

//easeInOut (linear timing function)

//We also can show the effect both in the beginning and the end of the animation. The transform is called “easeInOut”.

//Given the timing function, we calculate the animation state like this:


if (timeFraction <= 0.5) { 

// first half of the animation

  return timing(2 * timeFraction) / 2;

} else { 

// second half of the animation

  return (2 - timing(2 * (1 - timeFraction))) / 2;

}


//The wrapper code:


function makeEaseInOut(timing) {

  return function(timeFraction) {

    if (timeFraction < .5)

      return timing(2 * timeFraction) / 2;

    else

      return (2 - timing(2 * (1 - timeFraction))) / 2;

  }
}

bounceEaseInOut = makeEaseInOut(bounce);

