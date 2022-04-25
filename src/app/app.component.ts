import { Component } from '@angular/core';
//import { stat } from 'fs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular4-client';
  
  //constructor (private container: HTMLUListElement){}
  

  
  	selected_weapon: number = 0;
  	computer_weapon: number = 0;
  	winner: number = 0; //0= same, 1 = user, 2 = computer, 3 = unselected weapone
    us: any;
	
	select_rock(){
		this.selected_weapon = 1;
		this.user_selection();
		
	}
	
	select_paper(){
		this.selected_weapon = 2;
		this.user_selection();
	}
	
	select_scissors(){
		this.selected_weapon = 3;
		this.user_selection();
	}
	
	//random from interval
	randomIntFromInterval(min: number, max: number) { 
  		return Math.floor(Math.random() * (max - min + 1) + min)
	}



	user_selection(){
		// print weapone for user 
		const user_selected = document.getElementById("user_selection")!;
		const us = document.createElement("div");

		
		if (this.selected_weapon ==1){
			//console.log("user selected rock"); 
			us.textContent = "user selected rock";
			user_selected?.appendChild(us);
			} else if (this.selected_weapon ==2) {
				//console.log("user selected paper");
				us.textContent = "user selected paper";
				//user_selected?.replaceWith(" ");
				user_selected?.appendChild(us);
			}else if (this.selected_weapon ==3) {
				//console.log("user selected scissors");
				us.textContent = "user selected scissors";
				//user_selected?.replaceWith(" ");
				user_selected?.appendChild(us);
			}
	}
	
	computer_selection(){
		
		const computer_selected= document.getElementById("user_selection");
		const cs = document.createElement("div");
		
	
		// print weapone for computer 
		if (this.computer_weapon ==1){
			//console.log("computer selected rock");
			cs.textContent = "computer selected rock";
			computer_selected?.appendChild(cs);
			} else if (this.computer_weapon ==2) {
				cs.textContent = "computer selected paper";
				computer_selected?.appendChild(cs);
				//console.log("\n computer selected paper");
			}else if (this.computer_weapon ==3) {
				cs.textContent = "computer selected scissors";
				computer_selected?.appendChild(cs);
				//console.log("\n computer selected scissors");
			}
		}
	
	
	print_resultes(){
		this.user_selection();
		this.selected_weapon =0;
		this.computer_selection();
		}

	
	
	display_result(){
	
		const app = document.getElementById("user_selection");
		const p = document.createElement("div");
		
		
		//computer selects weapone
		this.computer_weapon = this.randomIntFromInterval(1, 3);
		
		
	
		// if user hasn't selected the weapone he can't play	
		if (this.selected_weapon == 0)	{
			this.winner =3;
			this.computer_weapon =0;
			this.selected_weapon=0;
		}
		
		// if youser selected some weapone he can play	
		if (this.selected_weapon == this.computer_weapon && this.selected_weapon!=0) {
			this.winner=0;
		} else if (this.selected_weapon==1){
			if (this.computer_weapon==2){
				this.winner =2;
			}
			else {
				this.winner =1;
			}
		} else if (this.selected_weapon==2){
			if (this.computer_weapon==1){
				this.winner =1;
			}
			else {
				this.winner =2;
			}
		} else if (this.selected_weapon==3){
			if (this.computer_weapon==2){
				this.winner =1;
			}
			else {
				this.winner =2;
			}
		} else {
			this.winner =3;
			this.computer_weapon =0;
			this.selected_weapon=0;
		}
		
		//printing resultes of the game
		if (this.winner == 0){
			//console.log("same weapone play again");
			p.textContent = "same weapone play again";
			app?.appendChild(p);
			this.selected_weapon=0;	
		} else if (this.winner == 1) {
			//console.log("you win!");
				p.textContent = "you win!";
				app?.appendChild(p);
			this.print_resultes();	
		} else if (this.winner == 2) {
			//console.log("you loose!");
				p.textContent = "you loose!";
				app?.appendChild(p);		
			this.print_resultes();
		}else if (this.winner == 3) {
			//console.log("select weapone!");	
			p.textContent = "select weapone!";
			app?.appendChild(p);
		}
				
		
		//console.log(" ");
		//console.log(" ");
		const app1 = document.getElementById("user_selection");
		const p2 = document.createElement("div");
		p2.textContent = "-------------end of the round----------------";
		app1?.appendChild(p2);
	
	}
}
function getElementById(arg0: string): any {
	throw new Error('Function not implemented.');
}

