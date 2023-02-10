// fxhash template by George H.K.
// feel free to use / tweak!

// DECLARE GLOBAL VARIABLES
// s is the minimum edge of the viewport. s can be hard-coded as a size in pixels e.g. const s = 2000;
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

    // set the fx(hash) features for your tokens. If it important to do this before you draw a single pixel on the screen!
    window.$fxhashFeatures = {
        
    }
}

function draw() {
    translate(-w * .5, -h * .5);
    background(bgWindow);

    // draw all the cells in the cells array
    for (let n = cells.length - 1; n >= 0; n--) {
        cells[n].drawCell();
    }

    if (!isMob) applyGrain();

    // on first run, console.log the fxhash and take preview
    if (!drawRuns) {
        console.log('fxhash: ', fxhash);
        fxpreview();
        //        save(fxhash); // for Ballzy: save as hashes
        //        save(palette.name); // for Ballzy: save palette names
        //        save(num + '.png'); // for Ballzy: save cell number
    } else if (drawRuns === 30) play = true; // start the animation
    // if user holds down 'f' the animation goes faster
    (keyIsPressed && keyCode === 70) ? delay = 28: delay = 100;

    if (play) {
        // long-ass code to move each of the groups of cells according to the animation
        switch (click) {
            case 0:
                for (let i = 0; i < group1.length; i++) {
                    (group1[i].x < group1[i].xCopy + oW - aS) ? group1[i].x += aS: group1[i].x = group1[i].xCopy + oW;
                }
                for (let i = 0; i < group2.length; i++) {
                    (group2[i].y < group2[i].yCopy + oH - aS) ? group2[i].y += aS: group2[i].y = group2[i].yCopy + oH;
                }
                for (let i = 0; i < group3.length; i++) {
                    (group3[i].x > group3[i].xCopy - oW + aS) ? group3[i].x -= aS: group3[i].x = group3[i].xCopy - oW;
                }
                for (let i = 0; i < group4.length; i++) {
                    (group4[i].y > group4[i].yCopy - oH + aS) ? group4[i].y -= aS: group4[i].y = group4[i].yCopy - oH;
                }
                break;
            case 1:
                for (let i = 0; i < group1.length; i++) {
                    (group1[i].y > group1[i].yCopy - oH + aS) ? group1[i].y -= aS: group1[i].y = group1[i].yCopy - oH;
                }
                for (let i = 0; i < group2.length; i++) {
                    (group2[i].x < group2[i].xCopy + oW - aS) ? group2[i].x += aS: group2[i].x = group2[i].xCopy + oW;
                }
                for (let i = 0; i < group3.length; i++) {
                    (group3[i].y < group3[i].yCopy + oH - aS) ? group3[i].y += aS: group3[i].y = group3[i].yCopy + oH;
                }
                for (let i = 0; i < group4.length; i++) {
                    (group4[i].x > group4[i].xCopy - oW + aS) ? group4[i].x -= aS: group4[i].x = group4[i].xCopy - oW;
                }
                break;
            case 2:
                for (let i = 0; i < group1.length; i++) {
                    (group1[i].x > group1[i].xCopy + aS) ? group1[i].x -= aS: group1[i].x = group1[i].xCopy;
                }
                for (let i = 0; i < group2.length; i++) {
                    (group2[i].y > group2[i].yCopy + aS) ? group2[i].y -= aS: group2[i].y = group2[i].yCopy;
                }
                for (let i = 0; i < group3.length; i++) {
                    (group3[i].x < group3[i].xCopy - aS) ? group3[i].x += aS: group3[i].x = group3[i].xCopy;
                }
                for (let i = 0; i < group4.length; i++) {
                    (group4[i].y < group4[i].yCopy - aS) ? group4[i].y += aS: group4[i].y = group4[i].yCopy;
                }
                break;
            case 3:
                for (let i = 0; i < group1.length; i++) {
                    (group1[i].y < group1[i].yCopy - aS) ? group1[i].y += aS: group1[i].y = group1[i].yCopy;
                }
                for (let i = 0; i < group2.length; i++) {
                    (group2[i].x > group2[i].xCopy + aS) ? group2[i].x -= aS: group2[i].x = group2[i].xCopy;
                }
                for (let i = 0; i < group3.length; i++) {
                    (group3[i].y > group3[i].yCopy + aS) ? group3[i].y -= aS: group3[i].y = group3[i].yCopy;
                }
                for (let i = 0; i < group4.length; i++) {
                    (group4[i].x < group4[i].xCopy - aS) ? group4[i].x += aS: group4[i].x = group4[i].xCopy;
                }
                break;
        }
        // every 100 drawRuns, increment the animation
        if (drawRuns % delay === 0) click++;
    }
    click = click % 4;
    drawRuns++;
}

class Cell {
    constructor(x, y, cellW, cellH, gen) {
        this.x = x;
        this.y = y;
        // original x and y positions (pre-animation)
        this.xCopy = x;
        this.yCopy = y;
        // cell width and height
        this.cellW = cellW;
        this.cellH = cellH;
        this.gen = gen;
        // mark as finished - changes to false if cell subdivides
        this.finished = true;
        (this.cellW === this.cellH) ? this.twoByOne = false: this.twoByOne = true;
        this.selectedShape = selectShape(this);

        this.selectColours();
    }

    drawCell() {
        if (this.finished) {
            // if twoTone, no cell background needed. Also, if normal mode and cell background is same as window background, no fill needed.
            (twoTone || (!twoTone && this.bgCol === bgWindow)) ? noFill(): fill(this.bgCol);
            // draw in the cell background
            rect(this.x, this.y, this.cellW, -this.cellH);
            (palette.name === 'Blueprint') ? noFill(): fill(this.col);
            drawShape(this);
        }
    }

    subdivide() {
        this.finished = false; // mark the parent cell for deletion
        // prepare new objects - depending on chosen subdivision, push new objects into array
        this.bottomLeft = new Cell(this.x, this.y, this.cellW * .5, this.cellH * .5, this.gen + 1);
        this.topLeft = new Cell(this.x, this.y - this.cellH * .5, this.cellW * .5, this.cellH * .5, this.gen + 1);
        this.topRight = new Cell(this.x + this.cellW * .5, this.y - this.cellH * .5, this.cellW * .5, this.cellH * .5, this.gen + 1);
        this.bottomRight = new Cell(this.x + this.cellW * .5, this.y, this.cellW * .5, this.cellH * .5, this.gen + 1);
        // 2x1s
        this.top = new Cell(this.x, this.y - this.cellH * .5, this.cellW, this.cellH * .5, this.gen + 1);
        this.bottom = new Cell(this.x, this.y, this.cellW, this.cellH * .5, this.gen + 1);
        this.left = new Cell(this.x, this.y, this.cellW * .5, this.cellH, this.gen + 1);
        this.right = new Cell(this.x + this.cellW * .5, this.y, this.cellW * .5, this.cellH, this.gen + 1);

        if (!this.gen || (random() > .55)) {
            // split into four 1x1 cells
            cells.push(this.bottomLeft, this.topLeft, this.topRight, this.bottomRight);
        } else {
            // do a 2x1, followed by two 1x1s
            switch (random([0, 1, 2, 3])) {
                case 0:
                    cells.push(this.top, this.bottomLeft, this.bottomRight);
                    break;
                case 1:
                    cells.push(this.bottom, this.topLeft, this.topRight);
                    break;
                case 2:
                    cells.push(this.left, this.topRight, this.bottomRight);
                    break;
                case 3:
                    cells.push(this.right, this.topLeft, this.bottomLeft);
                    break;
            }
        }
    }
    selectColours(a) {

        if (!a) { // first run only
            if (palette.name === 'Blueprint') {
                // blueprint mode
                this.bgCol = this.col = this.col2 = palette.value[0];
                stroke(palette.value[1]), strokeWeight(2 * mm);
            }
        }

        // always runs
        if (twoTone) {
            // two tone colours
            this.bgCol = twoToneCol1;
            this.col = twoToneCol2;
            this.col2 = twoToneCol1;
        } else if (palette.name != 'Blueprint') {
            // normal colours
            this.bgCol = bgCell;
            // colour of shape
            this.col = palette.value[Math.round(map(noise(this.x / w, this.y / h), 0, 1, palette.value.length - 1, 0))];
            // colour of accent of shape
            this.col2 = palette.value[Math.round(random(palette.value.length - 1))];

            // if background of cell is same as colour of shape, get a new colour of shape
            while (this.bgCol === this.col) this.col = palette.value[Math.round(random(palette.value.length - 1))];
            // if colour of accent is same as colour of shape, get a new accent colour
            while (this.col2 === this.col || this.col2 === this.bgCol) this.col2 = palette.value[Math.round(random(palette.value.length - 1))];
        }

    }
}
