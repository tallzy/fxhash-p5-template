// fxhash-p5-template

// e is the minimum edge of the viewport. e can be hard-coded as a size in pixels if preferred e.g. const e = 2000;
// canvas is an object that holds all size-related parameters. 
// for a square canvas, setting width and height to e
// multiply sizes of shapes in your script by mm (think millimetres) to keep your script size-agnostic 

const e = Math.min(innerWidth, innerHeight);
const canvas = {};
canvas.w = e;
canvas.h = e;
const mm = e * .001;

// useful test to determine if code is running on a mobile device. You can use this to e.g. de-activate shaders 
// or grain so the code is more light-weight and runs more smoothly on mobile devices 
const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);

function preload() {
    // seed random and perlin noise functions with fxrand() - needed to make your script deterministic
    // you can now use random() and noise() in the script 
    const seed = Math.round(fxrand() * 2e9);
    randomSeed(seed);
    noiseSeed(seed);

    // set the colour mode to HSB with alpha values ranging from 0.0 - 1.0.
    colorMode(HSB, 360, 100, 100, 1.0);
}

function setup() {
    // create a canvas - leave as-is for a 2D canvas or add WEBGL for a 3D WebGL enabled canvas.
    createCanvas(canvas.w, canvas.h);

    // if we are on a mobile device, limit pixel ratio to 1
    // otherwise set the pixel ratio to either 2 or the native pixel ratio, whichever is lowest
    (isMob) ? pixelDensity(1): pixelDensity(min(window.devicePixelRatio), 2);

    // if the algorithm is animated, set the frame-rate 
    frameRate(30);

    window.$fxhashFeatures = {
      // fx(hash) features for your tokens go here. If it important to set these before you draw a single pixel on the screen!
    }

    // set the background colour. Move this to draw() if you need to redraw the background for every frame
    background('lightblue');

    // I like to display the fxhash token in case it proves useful in getting back to a particular output
    // call noLoop() if your code is not animated to stop draw() from running on a loop 
    console.log('fxhash:', fxhash);
    noLoop();
}

function draw() {
  
    // draw code goes here
    noStroke();
    fill('orange');
    circle(canvas.w * 0.5, canvas.h * 0.5, 500 * mm);

  // call fxpreview once, when you are satisfied that the output is rendered and you are happy for fxhash  
  // to take a snapshot of the output to generate the token's preview
  if (frameCount === 1) fxpreview();
}

// function to save an output, with a the unique hash as the filename (so you can always come back to it), 
// when the user presses 's' (upper or lower-case)
function keyTyped() {
    if (keyCode === 83) {
        save(fxhash);
    }
    return false; // prevent any unwanted default browser behaviour
}