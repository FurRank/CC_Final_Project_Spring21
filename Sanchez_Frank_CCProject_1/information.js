class Information{
	constructor(img, option){
		this.img = img;

		this.b1 // lerp
		this.b2 // lerp 

		this.s1;
		this.s2;
		this.s3;
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
			stroke(0);
			rect(200, 80, 850, 540);

			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			textSize(32);
			fill(255); // text color
			text("NEW YORK CITY", 500, 50);
			this.s1 = "Total Cases (NA): ~33,500,000";// Total Cases in Continent
			this.s2 = "Total Deaths (NA): ~600,000";// total deaths continent
			this.s3 = "Most Affected Area: USA (NY) \nTotal Cases: 32,300,000 \n\nTotal Deaths: 575,000";// what area has the most (cases/deaths?)
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, 100, 850, 200, 200);
			text(this.s3, width/2-200, 700, 300, 350);

			textSize(16);
			text("NA Cases vs. USA Cases", 950, 655);

			fill(255, 0, 0);
			ellipse(1050, 825, 300, 300);

			fill(0, 0, 255);
			arc(1050, 825, 300, 300, 4*PI/3, 3*PI/2);

			fill(255);
			text("96%", 1080, 850);
			text("4%", 1010, 720);

			text("NA = Blue", 800, 800);
			text("USA = Red", 800, 830);

		}else if(this.img == SA_img){
			this.b1 = color(182, 96, 221);
			this.b2 = color(23, 175, 105);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			fill(0); // background square
			stroke(0);	
			rect(200, 80, 850, 540);

			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			
			textSize(32);
			fill(255); // text color
			text("BRAZIL", 570, 50);
			this.s1 = "Total Cases (SA): ~29,300,000";
			this.s2 = "Total Deaths (SA): ~930,000";
			this.s3 = "Most Affected Area: (Brazil) \nTotal Cases: 14,780,000 \n\nTotal Deaths: 408,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, 100, 850, 200, 200);
			text(this.s3, width/2-200, 700, 300, 350);


			textSize(16);
			text("SA Cases vs. BRAZIL Cases", 950, 655);

			fill(255, 0, 0);
			ellipse(1050, 825, 300, 300);

			fill(0, 0, 255);
			arc(1050, 825, 300, 300, PI/2, 3*PI/2);

			fill(255);
			text("50%", 1080, 830);
			text("50%", 990, 830);

			text("SA = Blue", 790, 800);
			text("BRAZIL = Red", 790, 830);
			
		}else if(this.img == EU_img){
			this.b1 = color(135, 53, 19);
			this.b2 = color(71, 103, 42);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}

			fill(0); // background square
			stroke(0);
			rect(200, 80, 850, 540);

			textSize(32);
			fill(255); // text color
			text("FRANCE", 570, 50);

			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (EU): ~50,000,000";
			this.s2 = "Total Deaths (EU): ~1,076,000";
			this.s3 = "Most Affected Area: (FR) \nTotal Cases: 5,777,000 \n\nTotal Deaths: 106,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, 100, 850, 200, 200);
			text(this.s3, width/2-200, 700, 300, 350);

			textSize(16);
			text("EU Cases vs. FRANCE Cases", 950, 655);

			fill(255, 0, 0);
			ellipse(1050, 825, 300, 300);

			fill(0, 0, 255);
			arc(1050, 825, 300, 300, 4*PI/3, 3*PI/2);

			fill(255);
			text("89%", 1080, 850);
			text("11%", 1005, 720);

			text("FRANCE = Blue", 780, 800);
			text("EU = Red", 780, 830);
		}else if(this.img == AF_img){
			this.b1 = color(42, 31, 53);
			this.b2 = color(121, 172, 198);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			fill(0); // background square
			stroke(0);
			rect(200, 80, 850, 540);

			textSize(32);
			fill(255); // text color
			text("SOUTH AFRICA", 540, 50);

			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			
			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (AF): ~4,620,000";
			this.s2 = "Total Deaths (AF): ~122,800";
			this.s3 = "Most Affected Area: (South Africa) \nTotal Cases: 1,580,000 \n\nTotal Deaths: 54,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, 100, 850, 200, 200);
			text(this.s3, width/2-200, 700, 300, 350);

			textSize(16);
			text("AF Cases vs. SOUTH AFRICA Cases", 930, 655);

			fill(255, 0, 0);
			ellipse(1050, 825, 300, 300);

			fill(0, 0, 255);
			arc(1050, 825, 300, 300, 5*PI/6, 3*PI/2);

			fill(255);
			text("66%", 1080, 850);
			text("34%", 970, 790);

			text("SOUTH AFRICA = Blue", 730, 800);
			text("AF = Red", 730, 830);
		}else if(this.img == AS_img){
			this.b1 = color(0, 0, 0);
			this.b2 = color(230, 230, 230);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			fill(0); // background square
			stroke(0);
			rect(200, 80, 850, 540);

			textSize(32);
			fill(255); // text color
			text("INDIA", 575, 50);

			image(this.img, 225, 100); 
			this.img.resize(800, 500);

			textSize(32);
			fill(50); // text color
			this.s1 = "Total Cases (AS): ~30,000,000";
			this.s2 = "Total Deaths (AS): ~378,000";
			this.s3 = "Most Affected Area: (India) \nTotal Cases: 22,600,000 \n\nTotal Deaths: 246,000";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, 100, 850, 200, 200);
			text(this.s3, width/2-200, 700, 300, 350);

			textSize(16);
			text("AS Cases vs. INDIA Cases", 950, 655);

			fill(255, 0, 0);
			ellipse(1050, 825, 300, 300);

			fill(0, 0, 255);
			arc(1050, 825, 300, 300, 2*PI, 3*PI/2);

			fill(255);
			text("25%", 1080, 780);
			text("75%", 970, 870);

			fill(50);
			text("INDIA = Blue", 770, 800);
			text("AS = Red", 770, 830);

		}else if(this.img == AN_img){
			this.b1 = color(75, 183, 163);
			this.b2 = color(90, 53, 92);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}
			fill(0); // background square
			stroke(0);
			rect(200, 80, 850, 540);

			textSize(32);
			fill(255); // text color
			text("ANTARTICA", 540, 50);

			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (AN): 36";
			this.s2 = "Total Deaths (AN): 0?";
			this.s3 = "Most Affected Area: Antartica itself";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, width/2-100, 700, 200, 200);
			text(this.s3, 900, 700, 300, 350);
			image(this.img, 225, 100); 
			this.img.resize(800, 500);
		}else if(this.img == AU_img){
			this.b1 = color(230, 230, 0);
			this.b2 = color(0, 100, 0);
			for(let i = 0; i < height; i++){
				let interA = map(i, 0, height, 0, 1);
				let col = lerpColor(this.b1, this.b2, interA);
				stroke(col);
				line(0, i, width, i);
			}

			fill(0); // background square
			stroke(0);
			rect(200, 80, 850, 540);

			textSize(32);
			fill(255); // text color
			text("AUSTRALIA", 540, 50);

			textSize(32);
			fill(255); // text color
			this.s1 = "Total Cases (OC): ~71,300";
			this.s2 = "Total Deaths (OC): ~1,300";
			this.s3 = "Most Affected Area: (Australia) \nTotal Cases: \n29,900 \n\nTotal Deaths: \n910";
			text(this.s1, 100, 700, 200, 200);
			text(this.s2, 100, 850, 200, 200);
			text(this.s3, width/2-200, 700, 300, 350);

			image(this.img, 225, 100); 
			this.img.resize(800, 500);
			
			textSize(16);
			text("OC Cases vs. AUSTRALIA Cases", 920, 655);

			fill(255, 0, 0);
			ellipse(1050, 825, 300, 300);

			fill(0, 0, 255);
			arc(1050, 825, 300, 300, 2*PI/3, 3*PI/2);

			fill(255);
			text("58%", 1080, 830);
			text("42%", 970, 830);

			text("AUSTRALIA = Blue", 740, 800);
			text("OC = Red", 740, 830);
		}
	}
}

function keyPressed(){
	if(key == 'N'|| key == 'n'){ // go next to animation slide
		if(option == 1){
			woosh.play(); 
			option = 8;
		}else if(option == 2){
			woosh.play(); 
			option = 9;
		}else if(option == 3){
			woosh.play(); 
			option = 10;
		}else if(option == 4){
			woosh.play(); 
			option = 11;
		}else if(option == 5){
			woosh.play(); 
			option = 12;
		}else if(option == 6){
			woosh.play(); 
			option = 13;
		}else if(option == 7){
			woosh.play(); 
			option = 14;
		}
	}
	else if(key == 'B' || key == 'b'){ // go back to world map
		option = 0;
	}else if(key == 'H' || key == 'h'){ // backtrack if on info slides
		if(option == 8){
			reverse.play();
			option = 1;
		}else if(option == 9){
			reverse.play();
			option = 2;
		}else if(option == 10){
			reverse.play();
			option = 3;
		}else if(option == 11){
			reverse.play();
			option = 4;
		}else if(option == 12){
			reverse.play();
			option = 5;
		}else if(option == 13){
			reverse.play();
			option = 6;
		}else if(option == 14){
			reverse.play();
			option = 7;
		}	
	}
	
}


//}