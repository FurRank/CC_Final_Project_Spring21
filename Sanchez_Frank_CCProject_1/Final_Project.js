// Name: Frank Sanchez
// Date: May 13, 2021
let world;
let data;
let info;
let option;

// images
let NA_img;
let SA_img;
let AF_img;
let EU_img;
let AS_img;
let AN_img;
let AU_img;

// fonts
let font1;
let font2;
let font3;
let font4;
let font5;
let font6;
let font7;

// random colors for backgrounds
let r1;
let r2;
let r3;
let r4;
let r5;
let r6;
let rb1;
let rb2;

// sound
let woosh;
let reverse;

let highlight0 = false;
let highlight1 = false;
let highlight2 = false;
let highlight3 = false;
let highlight4 = false;
let highlight5 = false;
let highlight6 = false;
let highlight7 = false;

function preload(){
	NA_img = loadImage('data/NYC.png');
	SA_img = loadImage('data/Brazil.png');
	AF_img = loadImage('data/South_Africa.png');
	EU_img = loadImage('data/France.png');
	AS_img = loadImage('data/India.png');
	AN_img = loadImage('data/Antartica.png');
	AU_img = loadImage('data/Australia.png');

	covid = loadImage('data/covid.png');

	// animations
	cool_mask = loadAnimation('data/animations/coolmask1.png', 'data/animations/coolmask43.png');
	wave = loadAnimation('data/animations/wave1.png', 'data/animations/wave4.png');
	interaction = loadAnimation('data/animations/interaction1.png', 'data/animations/interaction18.png')
	washing_hands = loadAnimation('data/animations/washing_hands1.png', 'data/animations/washing_hands17.png')
	vax = loadAnimation('data/animations/vax1.png', 'data/animations/vax7.png');
	rest = loadAnimation('data/animations/rest1.png', 'data/animations/rest5.png')
	clean = loadAnimation('data/animations/clean1.png', 'data/animations/clean9.png');

	// fonts
	font1 = loadFont('data/fonts/Wider.ttf');
	font2 = loadFont('data/fonts/Literal.ttf');
	font3 = loadFont('data/fonts/Quamaine-Brush.ttf');
	font4 = loadFont('data/fonts/Quamaine-Italic.ttf');
	font5 = loadFont('data/fonts/Valencia_Script.ttf');
	font6 = loadFont('data/fonts/Stricken_Brush.ttf');
	font7 = loadFont('data/fonts/NORTHCLIFF.ttf');

	// sounds
	woosh = loadSound('data/Transition.wav');
	woosh.setVolume(0.5);
	reverse = loadSound('data/Woosh_reverse.wav');
	reverse.setVolume(0.3);
}

function setup(){
	createCanvas(1250, 1000);
	world = new States(highlight0);
	data = new Dots(covid);
	option = 15;
	
}

function draw(){
	background(0, 128, 255);
	world.display();
	data.display();

	// highlight states
	if(((mouseX >= 0 & mouseX <= 425) && (mouseY <= 500 && mouseY >= 50)))
		{highlight1 = true; world = new States(highlight1); highlight2 = false;
			fill(0, 0, 0, 150); 
			stroke(0);
			rect(350, 30, 850, 550);
			image(NA_img, 375, 50); 
			NA_img.resize(800, 500);

			triangle(350, 30, 325, 325, 350, 580);
		}
	else if((mouseX >= 250 && mouseX <= 400) && (mouseY <= 825 && mouseY >=500))
		{highlight2 = true; world = new States(highlight2); highlight1 = false;
			fill(0, 0, 0, 150); 
			stroke(0);
			rect(350, 30, 850, 550);
			image(SA_img, 375, 50); 
			SA_img.resize(800, 500);

			triangle(350, 580, 375, 600, 1200, 580);
		}
	else if((mouseX >= 550 && mouseX <= 750) && (mouseY <= 750 && mouseY >= 450))
		{highlight3 = true; world = new States(highlight3); highlight4 = false; highlight5 = false;
			fill(0, 0, 0, 150); 
			stroke(0);
			rect(0, 0, 850, 550);
			image(AF_img, 25, 20); 
			AF_img.resize(800, 500);

			triangle(0, 550, 650, 600, 850, 550);
		}
	else if((mouseX >= 550 && mouseX <= 800) && (mouseY <= 450 && mouseY >= 250))
		{highlight4 = true; world = new States(highlight4); highlight3 = false; highlight5 = false;
			fill(0, 0, 0, 150); 
			stroke(0);
			rect(0, 450, 850, 550);
			image(EU_img, 25, 470); 
			EU_img.resize(800, 500);

			triangle(0, 450, 650, 425, 850, 450);
		}
	else if((mouseX >= 800 && mouseX <= width) && (mouseY <= 625 && mouseY >= 150))
		{highlight5 = true; world = new States(highlight5); highlight3 = false; highlight4 = false;
			fill(0, 0, 0, 150); 
			stroke(0);
			rect(0, 125, 850, 550);
			image(AS_img, 25, 145); 
			AS_img.resize(800, 500);

			triangle(850, 125, 900, 500, 850, 675);
		} 
	else if((mouseX >= 375 && mouseX <= 950) && (mouseY <= height && mouseY >= 875))
		{highlight6 = true; world = new States(highlight6);
			fill(0, 0, 0, 150); 
			stroke(0);
			rect(350, 30, 850, 550);
			image(AN_img, 375, 50); 
			AN_img.resize(800, 500);

			triangle(350, 580, 750, height-50, 1200, 580);
		}
	else if((mouseX >= 1025 && mouseX <= 1225) && (mouseY <= 825 && mouseY >= 650))
		{highlight7 = true; world = new States(highlight7);
			fill(0, 0, 0, 150); 
			stroke(0);
			rect(150, 400, 850, 550);
			image(AU_img, 175, 420); 
			AU_img.resize(800, 500);

			triangle(1000, 400, 1075, 700, 1000, 950);
		}
	else{
		world = new States(highlight0);
		highlight1 = false;
		highlight2 = false;
		highlight3 = false;
		highlight4 = false;
		highlight5 = false;
		highlight6 = false;
		highlight7 = false;
	}

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
		fill(255);
		textSize(50);
		gradient();
		textFont(font1);
		text("COOL PEOPLE", 400, 200);
		text("MASK UP", 500, 800);
		animation(cool_mask, width/2, height/2);
	}else if(option == 9){
		gradient();	
		fill(0);
		textSize(50);
		textFont(font2);
		text("EVERYONE SHOULD PRACTICE", 300, 100);
		text("SOCIAL DISTANCING", 425, 950);
		scale(0.75);
		animation(wave, width/2 + 210, height/2+150);
	}else if(option == 10){
		gradient();
		fill(255);
		textSize(50);
		textFont(font3);
		text("THERE ARE BETTER WAYS", 450, 150);
		text("TO GREET OTHERS", 500, 900);
		animation(interaction, width/2, height/2);
	}else if(option == 11){
		gradient();
		fill(0);
		textSize(50);
		textFont(font4);
		text("DON'T FORGET", 475, 150);
		text("TO WASH YOUR HANDS", 400, 900);
		animation(washing_hands, width/2, height/2);
	}else if(option == 12){
		gradient();
		fill(0);
		textSize(150);
		textFont(font5);
		text("VAXXED PEOPLE", 375, 300);
		text("ARE COOL PEOPLE", 350, 800);
		animation(vax, width/2, height/2);
	}else if(option == 13){
		gradient();
		fill(0);
		textSize(50);
		textFont(font6);
		text("IF YOU'RE FEELING ILL", 375, 175);
		text("REST IT OUT", 475, 850);
		animation(rest, width/2, height/2);
	}else if(option == 14){
		gradient();
		fill(255);
		textSize(50);
		textFont(font7);
		text("CLEAN UP AFTER YOURSELF", 250, 250);
		text("KEEP IT CLEAN FOR OTHERS", 250, 800);
		scale(2);
		animation(clean, width/2-300, height/2-250);
	}
		
	if(option == 15){ // start up screen

		rb1 = color(87, 53, 21);
		rb2 = color(135, 42, 213);
		for(let i = 0; i < height; i++){
			let interA = map(i, 0, height, 0, 1);
			let col = lerpColor(rb1, rb2, interA);
			stroke(col);
			line(0, i, width, i);
		}

		rb1 = color(235, 132, 86);
		rb2 = color(98, 31, 42);
		for(let i = 0; i < width; i++){
			let interA = map(i, width, 0, 0, 1);
			let col = lerpColor(rb1, rb2, interA);
			stroke(col);
			line(0, i, width, i);
		}

		fill(255);
		stroke(0);
		textFont(font7);
		textSize(60);
		text("COVID MAP", 420, 150);
		textSize(25);
		text("QUICK INFORMATION WITH BRIEF PSAs", 360, 225);

		textSize(30);
		text("CLICK ON CONTINENTS", 420, 800);
		text("B = BACK TO MAP // N = NEXT SLIDE // H = PREVIOUS SLIDE", 120, 850);
		textSize(20);
		text("PRESS B TO PROCEED", 975, 970);

		scale(10);
		image(covid,36.5,25);
		if(keyIsPressed){
			option == 0;
		}
	}
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
	if(((mouseX >= 0 & mouseX <= 425) && (mouseY <= 500 && mouseY >= 50)) && option == 0){woosh.play(); option = 1;}
	else if((mouseX >= 250 && mouseX <= 400) && (mouseY <= 825 && mouseY >=500) && option == 0){woosh.play(); option = 2;}
	else if((mouseX >= 550 && mouseX <= 750) && (mouseY <= 750 && mouseY >= 450) && option == 0){woosh.play(); option = 3;}
	else if((mouseX >= 550 && mouseX <= 800) && (mouseY <= 450 && mouseY >= 250) && option == 0){woosh.play(); option = 4;}
	else if((mouseX >= 800 && mouseX <= width) && (mouseY <= 625 && mouseY >= 150) && option == 0){woosh.play(); option = 5;} 
	else if((mouseX >= 375 && mouseX <= 950) && (mouseY <= height && mouseY >= 875) && option == 0){woosh.play(); option = 6}
	else if((mouseX >= 1025 && mouseX <= 1225) && (mouseY <= 825 && mouseY >= 650) && option == 0){woosh.play(); option = 7;}
}