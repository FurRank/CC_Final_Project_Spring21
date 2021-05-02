// Name: Frank Sanchez
// Date: May 4, 2021
let world;
let data;
let info;
let option;

function preload(){
	NA_img = loadImage('data/NYC.png');
	SA_img = loadImage('data/Brazil.png');
	AF_img = loadImage('data/South_Africa.png');
	EU_img = loadImage('data/France.png');
	AS_img = loadImage('data/India.png');
	AN_img = loadImage('data/Antartica.png');
	AU_img = loadImage('data/Australia.png');

}

function setup(){
	createCanvas(1250, 1000);
	world = new States();
	// data = new Dots();
	option = 0;
	
}

function draw(){
	background(0, 128, 255);
	// ellipse(100, 100, 100, 100);
	world.display();
	// data.display();

	// fill(0);
	if(option == 1){
		info = new Information(NA_img, option);
		info.display();
	}else if(option == 2){
		info = new Information(SA_img, option);
		info.display();
	}
	// if(mouseX <= 425 && mouseY <= 500){ //&& mouseIsPressed){
	// 	// image(AS_img, 500, 500); // sets placement
	// 	// NA_img.resize(500, 500); // sets size
	// 	// info = new Information(NA_img);
	// 	// info.display();
	// 	// rect(100, 100, 100, 100);
	// 	if(mouseIsPressed){
	// 		option = 1;
	// 	}
		

	// }
	// rect(0, 50, 425, 500); // NA Range

	// rect(250, 500, 150, 325); // SA Range

	// rect(550, 450, 200, 300); // Africa Range

	// rect(550, 250, 250, 200); // EU Range

	// rect(800, 150, 450, 475); // Asia Range
	
	// rect(1025, 650, 200, 175); // Australia Range

	// rect(375, 875, 575, 125); // Antartica Range

	// if(mouseIsPressed){
	// 	image(EU_img);
	// }
}

function mousePressed(){
	// if(option == 1){
	// 	info = new Information(NA_img);
	// 	info.display();
	// }
	if(mouseX <= 425 && mouseY <= 500){
		option = 1;
	}else if((mouseX >= 250 && mouseX <= 400) && (mouseY <= 825 && mouseY >=500)){
		option = 2;
	}else{
		option = 0;
	}
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