// Name: Frank Sanchez
// Date: May 13, 2021
let world;
let data;
let info;
let option;

// random colors for backgrounds
let r1;
let r2;
let r3;
let r4;
let r5;
let r6;
let rb1;
let rb2;

function preload(){
	NA_img = loadImage('data/NYC.png');
	SA_img = loadImage('data/Brazil.png');
	AF_img = loadImage('data/South_Africa.png');
	EU_img = loadImage('data/France.png');
	AS_img = loadImage('data/India.png');
	AN_img = loadImage('data/Antartica.png');
	AU_img = loadImage('data/Australia.png');

	// animations
	cool_mask = loadAnimation('data/animations/coolmask1.png', 'data/animations/coolmask43.png');

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
	}else if(option == 3){
		info = new Information(AF_img, option);
		info.display();
	}else if(option == 4){
		info = new Information(EU_img, option);
		info.display();
	}else if(option == 5){
		info = new Information(AS_img, option);
		info.display();
	}else if(option == 6){
		info = new Information(AN_img, option);
		info.display();
	}else if(option == 7){
		info = new Information(AU_img, option);
		info.display();
	}else if(option == 8){ // have to call from information
		fill(127);
		rect(0, 0, width, height);
		fill(0);
		textSize(50);
		gradient();
		text("COOL PEOPLE", 450, 200);
		text("MASK UP", 500, 800);
		animation(cool_mask, width/2, height/2);
		// Animation to persuade for vaccinations and etc.
	}else if(option == 9){
		gradient();
		// Animation to persuade for vaccinations and etc.
	}else if(option == 10){
		gradient();
		// Animation to persuade for vaccinations and etc.
	}else if(option == 11){
		gradient();
		// Animation to persuade for vaccinations and etc.
	}else if(option == 12){
		gradient();
		// Animation to persuade for vaccinations and etc.
	}else if(option == 13){
		gradient();
		// Animation to persuade for vaccinations and etc.
	}else if(option == 14){
		gradient();
		// Animation to persuade for vaccinations and etc.
	}
		

	// }
	// rect(0, 50, 425, 500); // NA Range

	// rect(250, 500, 150, 325); // SA Range

	// rect(550, 450, 200, 300); // Africa Range

	// rect(550, 250, 250, 200); // EU Range

	// rect(800, 150, 450, 475); // Asia Range
	
	// rect(1025, 650, 200, 175); // Australia Range

	// rect(375, 875, 575, 125); // Antartica Range

}

function gradient(){
	if(option == 8){r1 = 231; r2 = 32; r3 = 64; r4 = 132; r5 = 92; r6 = 12;}
	else if(option == 9){r1 = 203; r2 = 131; r3 = 48; r4 = 174; r5 = 217; r6 = 38;}
	else if(option == 10){r1 = 42; r2 = 58; r3 = 225; r4 = 215; r5 = 27; r6 = 190;}
	else if(option == 11){r1 = 70; r2 = 159; r3 = 110; r4 = 82; r5 = 92; r6 = 52;}
	else if(option == 12){r1 = 35; r2 = 161; r3 = 121; r4 = 94; r5 = 124; r6 = 196;}
	else if(option == 13){r1 = 210; r2 = 66; r3 = 236; r4 = 194; r5 = 193; r6 = 209;}
	else if(option == 14){r1 = 6; r2 = 74; r3 = 64; r4 = 72; r5 = 229; r6 = 31;}

	rb1 = color(r1, r2, r3);
	rb2 = color(r4, r5, r6);
	for(let i = 0; i < height; i++){
		let interA = map(i, 0, height, 0, 1);
		let col = lerpColor(rb1, rb2, interA);
		stroke(col);
		line(0, i, width, i);
	}
}

function mousePressed(){
	if(((mouseX >= 0 & mouseX <= 425) && (mouseY <= 500 && mouseY >= 50)) && option == 0){
		option = 1;
	}else if((mouseX >= 250 && mouseX <= 400) && (mouseY <= 825 && mouseY >=500) && option == 0){
		option = 2;
	}else if((mouseX >= 550 && mouseX <= 750) && (mouseY <= 750 && mouseY >= 450) && option == 0){
		option = 3;
	}else if((mouseX >= 550 && mouseX <= 800) && (mouseY <= 450 && mouseY >= 250) && option == 0){
		option = 4;
	}else if((mouseX >= 800 && mouseX <= width) && (mouseY <= 625 && mouseY >= 150) && option == 0){
		option = 5;
	}else if((mouseX >= 375 && mouseX <= 950) && (mouseY <= height && mouseY >= 875) && option == 0){
		option = 6
	}else if((mouseX >= 1025 && mouseX <= 1225) && (mouseY <= 825 && mouseY >= 650) && option == 0){
		option = 7;
	}//else{
		// option = 0;
	// }
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