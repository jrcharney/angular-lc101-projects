import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons";
   //inactive: boolean = false;
   active: boolean = true;
   buttonState: boolean[] = [true, true, true];
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   reactiveButtons(){
     for(let i = 0; i < this.buttonState.length; i++){
       this.buttonState[i] = true;
     }
     return this.buttonState;
   }

   shiftLocation(oldLocation: string){
     let locations : string[] = ['left','center','right'];
     let random : number;
     while(this.location === oldLocation){
       random = Math.floor(Math.random() * locations.length);
       this.location = locations[random];
     }
     return this.location;
   }

}
