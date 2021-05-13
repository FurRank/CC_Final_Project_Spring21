class Dots{
	constructor(img){
		this.covid = img;

	}

	display(){
			// Little images that portray most affected area
			for(let i = 1; i < 8; i++){
				if(i == 1){
					image(this.covid, 275, 300); 
					this.covid.resize(50, 50);
				}else if(i == 2){
					image(this.covid, 350, 575); 
					this.covid.resize(50, 50);
				}else if(i == 3){
					image(this.covid, 625, 600); 
					this.covid.resize(50, 50);
				}else if(i == 4){
					image(this.covid, 625, 375); 
					this.covid.resize(50, 50);
				}else if(i == 5){
					image(this.covid, 900, 475); 
					this.covid.resize(50, 50);
				}else if(i == 6){
					image(this.covid, 725, height-50); 
					this.covid.resize(50, 50);
				}else if(i == 7){
					image(this.covid, 1075, 675); 
					this.covid.resize(50, 50);
				}
			}
	}
}
