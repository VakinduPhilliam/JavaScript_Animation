# JavaScript_Animation
Building Animations using JavaScript.
#JavaScript animations
JavaScript animations can handle things that CSS can’t; for instance, moving along a complex path.
An animation can be implemented as a sequence of frames – usually small changes to HTML/CSS properties.
For animations that CSS can’t handle well, or those that need tight control, JavaScript can help. JavaScript animations should be implemented via requestAnimationFrame. That built-in method allows to setup a callback function to run when the browser will be preparing a repaint. Usually that’s very soon, but the exact time depends on the browser.
When a page is in the background, there are no repaints at all, so the callback won’t run: the animation will be suspended and won’t consume resources. That’s great.

Compiled by Vakindu Philliam
