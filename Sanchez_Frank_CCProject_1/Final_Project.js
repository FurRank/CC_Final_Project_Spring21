// Name: Frank Sanchez
// Date: May 4, 2021
let world;
let data;

function setup(){
	createCanvas(1250, 1000);
	world = new States();
	data = new Dots();
	background(0, 128, 255);
}

function draw(){
	// ellipse(100, 100, 100, 100);
	world.display();
	// data.display();
}

// Progression:
// World map just as it is
// Give it a couple of seconds, then the data (symbols) will scale? (or have) sizes (S, M, L, XL) depending on how covid effected the area
// On the world map, there will be a refresh button (maybe) so the visual can repeat
// Press any continent to view information
// -> Info on highest effected area in that continent, how it's doing now, current most effected area
// There will be a next button to get out of the infographic
// and users will be met with a persuasion animation (i.e. for them to get their shots and mask-up regardless, etc.)
// (Maybe) 7 animations for each infographic