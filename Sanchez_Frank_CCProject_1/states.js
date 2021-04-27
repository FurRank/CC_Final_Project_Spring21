class States{
	constructor(){
		// NA
		this.NA = new createVector(100, 300);
		// SA
		this.SA = new createVector(250, 500);
		// Africa
		this.AF = new createVector(550, 450);
		// Europe
		this.EU = new createVector(600, 350);
		// Asia
		this.AS = new createVector(800, 275);
		// Antartica
		this.AN = new createVector(550, height-100);
		// Australia 
		this.AU = new createVector(1050, 650);
	}

	display(){
		noStroke();
		// NA
		fill(255, 51, 51); // Red
		rect(this.NA.x+175, this.NA.y-25, 75, 25); // Parts of Canada (East)
		rect(this.NA.x+175, this.NA.y-50, 50, 25); // Parts of Canada
		rect(this.NA.x+175, this.NA.y-75, 25, 25); // Parts of Canada

		rect(this.NA.x-25, this.NA.y-50, 175, 75); // Parts of Canada (North)
		rect(this.NA.x-50, this.NA.y-75, 175, 50); // Parts of Canada
		rect(this.NA.x-75, this.NA.y-125, 225, 50); // Parts of Canada
		rect(this.NA.x-100, this.NA.y-150, 225, 50); // Parts of Canada

		rect(this.NA.x+225, this.NA.y-250, 100, 100); // Greenland
		rect(this.NA.x+200, this.NA.y-225, 25, 50); // Greenland
		rect(this.NA.x+225, this.NA.y-250, 50, 150); 


		rect(this.NA.x, this.NA.y, 200, 100); // Most of USA
		rect(this.NA.x+160, this.NA.y, 25, 150); // Florida
		rect(this.NA.x+25, this.NA.y+50, 25, 100); // Parts of Mexico
		rect(this.NA.x+50, this.NA.y+50, 25, 125); // Parts of Mexico
		rect(this.NA.x+50, this.NA.y+150, 75, 25); // Parts of Mexico
		rect(this.NA.x+75, this.NA.y+150, 25, 50); // Parts of Mexico
		rect(this.NA.x+75, this.NA.y+200, 75, 25); // Parts of Mexico
		// SA
		fill(255, 153, 51); // Orange
		rect(this.SA.x, this.SA.y, 75, 100);
		rect(this.SA.x+25, this.SA.y+25, 100, 200);
		rect(this.SA.x+50, this.SA.y+50, 100, 100);
		rect(this.SA.x+25, this.SA.y+25, 75, 250);
		rect(this.SA.x+25, this.SA.y+25, 50, 300);

		// Africa
		fill(0, 102, 204); // Blue
		rect(this.AF.x, this.AF.y, 175, 100);
		rect(this.AF.x+50, this.AF.y, 125, 150);
		rect(this.AF.x+50, this.AF.y+75, 150, 75);
		rect(this.AF.x+50, this.AF.y, 100, 200);
		rect(this.AF.x+50, this.AF.y, 75, 250);
		rect(this.AF.x+50, this.AF.y, 50, 300);
		rect(this.AF.x+50, this.AF.y, 50, 300);
		rect(this.AF.x+150, this.AF.y+200, 25, 50);
		// Europe
		fill(255, 255, 51);
		rect(this.EU.x-50, this.EU.y-100, 25, 25); // Iceland
		rect(this.EU.x, this.EU.y+75, 25, 25);
		rect(this.EU.x+25, this.EU.y+25, 100, 50);
		rect(this.EU.x+50, this.EU.y, 100, 50);
		rect(this.EU.x+75, this.EU.y-50, 125, 75);
		rect(this.EU.x+50, this.EU.y-75, 50, 25);
		rect(this.EU.x+75, this.EU.y-100, 50, 25);
		rect(this.EU.x+125, this.EU.y-100, 25, 50);
		rect(this.EU.x+125, this.EU.y-75, 75, 100);

		rect(this.EU.x-25, this.EU.y, 50, 25);
		rect(this.EU.x, this.EU.y-25, 25, 25);
		// Asia
		fill(51, 255, 51);
		rect(this.AS.x, this.AS.y, 100, 100);
		rect(this.AS.x-75, this.AS.y+150, 25, 50);
		rect(this.AS.x-50, this.AS.y+150, 50, 100);
		rect(this.AS.x-25, this.AS.y+100, 25, 100);
		rect(this.AS.x+25, this.AS.y+100, 25, 75);
		rect(this.AS.x-25, this.AS.y+150, 300, 50);
		rect(this.AS.x+25, this.AS.y-25, 350, 50);
		rect(this.AS.x+50, this.AS.y-50, 350, 50);
		rect(this.AS.x+100, this.AS.y-125, 400, 50);
		rect(this.AS.x+100, this.AS.y-100, 300, 50);

		rect(this.AS.x+300, this.AS.y, 25, 150);

		rect(this.AS.x+75, this.AS.y+150, 100, 75);
		rect(this.AS.x+100, this.AS.y+175, 50, 75);
		rect(this.AS.x+100, this.AS.y+175, 25, 100);

		rect(this.AS.x+50, this.AS.y, 250, 200);

		rect(this.AS.x+225, this.AS.y+200, 50, 50);
		rect(this.AS.x+200, this.AS.y+250, 25, 75);
		rect(this.AS.x+225, this.AS.y+325, 75, 25);
		rect(this.AS.x+250, this.AS.y+275, 25, 25);
		// Antartica
		fill(255);
		rect(this.AN.x, this.AN.y+50, 400, 50);
		rect(this.AN.x-150, this.AN.y+50, 50, 50);
		rect(this.AN.x-175, this.AN.y+75, 50, 25);
		rect(this.AN.x-125, this.AN.y-25, 25, 75);
		// Australia
		fill(153, 51, 255);
		rect(this.AU.x, this.AU.y, 75, 75);
		rect(this.AU.x-25, this.AU.y+25, 25, 75);
		rect(this.AU.x+50, this.AU.y+25, 50, 75);
		rect(this.AU.x+50, this.AU.y+25, 25, 100);

		rect(this.AU.x+150, this.AU.y+125, 25, 50);
		rect(this.AU.x+125, this.AU.y+150, 25, 25);
	}
}