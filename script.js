// fxhash-p5-template

// DECLARE GLOBAL VARIABLES
// s is the minimum edge of the viewport. s can be hard-coded as a size in pixels if preferred e.g. const s = 2000;
// canvas is an object that holds all size-related parameters. 
// for a square canvas, setting width and height to s
// multiply sizes of shapes in your script by mm (think millimetres) to keep your script size-agnostic 

const s = Math.min(innerWidth, innerHeight);
const canvas = {};
canvas.w = s;
canvas.h = s;
const mm = s * .001;

// useful test to determine if code is running on a mobile device. You can use this to e.g. de-activate shaders 
// or grain so the code is more light-weight and runs more smoothly on mobile devices 
const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);

function setup() {
    // seed random and perlin noise functions with fxrand() - needed to make your script deterministic
    const seed = Math.round(fxrand() * 2e9);
    randomSeed(seed);
    noiseSeed(seed);
    
    // create a canvas - leave as-is for a 2D canvas or add WEBGL for a 3D WebGL enabled canvas.
    createCanvas(w, h, WEBGL);

    // if we are on a mobile device, limit pixel ratio to 1
    // otherwise set the pixel ratio to either 2 or the native pixel ratio, whichever is lowest
    (isMob) ? pixelDensity(1): pixelDensity(min(window.devicePixelRatio), 2);

    // if the algorithm is animated, set the frame-rate 
    frameRate(30);

    window.$fxhashFeatures = {
      // fx(hash) features for your tokens go here. If it important to set these before you draw a single pixel on the screen!
    }
}

function draw() {
  // draw code goes here 
}