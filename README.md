# Fxhash p5js Template
## Overview
Everything you need to start work on a new p5.js generative art project for release on fx(hash).

If you haven't already, I would recomment reading, at the very least, the following before dropping your project:
- [Guide to mint a Generative Token](https://www.fxhash.xyz/doc/artist/guide-publish-generative-token)
- [Capture settings](https://www.fxhash.xyz/doc/artist/capture-settings) (covers `fxpreview()` among other things)

## Template features
- CSS ensures that the output correctly fills the window and resizes on window resize
- seeds `random` and `noise` with `fxrand()` to ensure the project is deterministic
- sets up features and calls `fxpreview()` 
- sets up canvas to facilitate size-agnostic design
- tests whether the code is running on a mobile device
- sets up pixel ratio, frame rate
- function to save an output by pressing 'S'
- over-commented code!

### Notes
- The minified p5.js library (v1.5.0, released on October 18, 2022) is included in the `./libraries` folder. The latest version of p5.js [can be found here](https://p5js.org/download/).

Hope you find this useful - please send feedback my way!
