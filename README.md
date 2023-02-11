# Fxhash p5js Template
## Overview
Everything you need to start a new p5.js generative art project for release on fx(hash).

If you haven't already, I would recomment reading, _at the very least_, the following before dropping your project:
- [Guide to mint a Generative Token](https://www.fxhash.xyz/doc/artist/guide-publish-generative-token)
- [Capture settings](https://www.fxhash.xyz/doc/artist/capture-settings) (covers `fxpreview()` and more)

## Template features
- seeds `random` and `noise` with `fxrand()` to ensure the project is deterministic
- CSS ensures that the output correctly fills the window and resizes
- sets up features and calls `fxpreview()` 
- sets up canvas to facilitate size-agnostic design
- tests whether the code is running on a mobile device
- sets up pixel ratio, frame rate
- function to save an output by pressing 'S'
- over-commented code!

## Publish your project
Once you are happy with your code, compress the contents of your working directory into a **.ZIP** file. It should contain, at least, `index.html`, `style.css`, `script.js` and `p5.min.js` to run correctly. `index.html` **must** be at the root of the archive.

You could upload your **.ZIP** onto the [fx(hash) sandbox](https://fxhash.xyz/sandbox/) to verify whether it works properly, or head straight to the [mint page](https://www.fxhash.xyz/mint-generative/capture-settings) for a dry run and/or to publish your token.

### Notes
- The minified p5.js library (v1.5.0, released on October 18, 2022) is included in the `./libraries` folder. The latest version of p5.js [can be found here](https://p5js.org/download/).
