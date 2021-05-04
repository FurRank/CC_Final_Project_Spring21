class Information{
	constructor(img, option){
		this.img = img;
		// this.br; // op1
		// this.bG; // op1
		// this.bB; // op1

		this.b1 // lerp
		this.b2 // lerp 

		this.s1;
		this.s2;
		this.s3;

		this.counter;
		// an array of fonts (randomize for each description)
	}

	display(){
		if(this.img == NA_img){
			// this.bR = map(mouseX, 0, width, 0, 127);
   //  		this.bG = map(mouseX, 0, width, 127, 0);
   //  		this.bB = map(mouseX, 0, width, 0, 127);
			// fill(this.bR, this.bG, this.bB);
			// rect(0, 0, width, height);
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
			this.counter = 1;


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
			// Differnt displays (i.e. text and bg)
		}else if(this.img == AN_img){
			this.b1 = color(75, 183, 163);
			this.b2 = color(90, 53, 92);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
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
			}
			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			// Differnt displays (i.e. text and bg)
		}
		

		// image(this.img); //Since all of them require being called
	}
}

function keyPressed(){
	if(key == 'N'){
		//if(this.counter  == 1){
			// fill(0);
			// rect(0, 0, 1250, 1000);
			option = 8;
		//}//else if(this.img == SA_img){
		// 	option = 9;
		// }
	}
	// if(this.img = NA_img){
	// 	option = 8
	// }	
	else if(key == 'B'){
		option = 0;
	}
	
}


//}