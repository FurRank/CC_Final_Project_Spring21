class Information{
	constructor(img, option){
		this.img = img;

		this.b1 // lerp
		this.b2 // lerp 

		this.s1;
		this.s2;
		this.s3;

		this.counter = 0;
		// an array of fonts (randomize for each description)
	}

	display(){
		if(this.img == NA_img){
			this.b1 = color(52, 251, 65);
			this.b2 = color(12, 54, 98);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			fill(0); // background square
			rect(200, 80, 850, 540);

			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (NA): ~33,500,000";// Total Cases in Continent
			this.s2 = "Total Deaths (NA): ~600,000";// total deaths continent
			this.s3 = "Most Affected Area: USA (NY) TC: 32,300,000 TD: 575,000";// what area has the most (cases/deaths?)
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);

			// this.counter = 1;
			// console.log(this.counter);

		}else if(this.img == SA_img){
			this.b1 = color(182, 96, 221);
			this.b2 = color(23, 175, 105);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (SA): ~29,300,000";
			this.s2 = "Total Deaths (SA): ~930,000";
			this.s3 = "Most Affected Area: Brazil TC: 14,780,000 TD: 408,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);

			// this.counter = 2;
			// Differnt displays (i.e. text and bg)
			
		}else if(this.img == EU_img){
			this.b1 = color(135, 53, 19);
			this.b2 = color(71, 103, 42);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (EU): ~50,000,000";
			this.s2 = "Total Deaths (EU): ~1,076,000";
			this.s3 = "Most Affected Area: UK TC: 4,421,000 TD: 127,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);
			// Differnt displays (i.e. text and bg)
		}else if(this.img == AF_img){
			this.b1 = color(42, 31, 53);
			this.b2 = color(121, 172, 198);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (AF): ~4,620,000";
			this.s2 = "Total Deaths (AF): ~122,800";
			this.s3 = "Most Affected Area: South Africa TC: 1,580,000 TD: 54,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);
			// Differnt displays (i.e. text and bg)
		}else if(this.img == AS_img){
			this.b1 = color(0, 0, 0);
			this.b2 = color(230, 230, 230);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			image(this.img, 225, 100); 
			this.img.resize(800, 500);

			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (AS): ~27,300,000";
			this.s2 = "Total Deaths (AS): ~350,000";
			this.s3 = "Most Affected Area: India TC: 20,000,000 TD: 222,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);
			// Differnt displays (i.e. text and bg)
		}else if(this.img == AN_img){
			this.b1 = color(75, 183, 163);
			this.b2 = color(90, 53, 92);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (AN): 36";
			this.s2 = "Total Deaths (AN): 0?";
			this.s3 = "Most Affected Area: Antartica itself";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);
			}
			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			// Differnt displays (i.e. text and bg)
		}else if(this.img == AU_img){
			this.b1 = color(230, 230, 0);
			this.b2 = color(0, 100, 0);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (OC): ~70,700";
			this.s2 = "Total Deaths (OC): ~1,300";
			this.s3 = "Most Affected Area: Australia TC: 29,800 TD: 910";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);
			}
			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			// Differnt displays (i.e. text and bg)
		}
	}
}

function keyPressed(){
	if(key == 'N'|| key == 'n'){ // go next to animation slide
		// console.log(this.counter);
		if(option == 1){
			option = 8;
		}else if(option == 2){
			option = 9;
		}else if(option == 3){
			option = 10;
		}else if(option == 4){
			option = 11;
		}else if(option == 5){
			option = 12;
		}else if(option == 6){
			option = 13;
		}else if(option == 7){
			option = 14;
		}
	}
	else if(key == 'B' || key == 'b'){ // go back to world map
		option = 0;
	}else if(key == 'H' || key == 'h'){ // backtrack if on info slides
		if(option == 8){
			option = 1;
		}else if(option == 9){
			option = 2;
		}else if(option == 10){
			option = 3;
		}else if(option == 11){
			option = 4;
		}else if(option == 12){
			option = 5;
		}else if(option == 13){
			option = 6;
		}else if(option == 14){
			option = 6;
		}	
	}
	
}


//}