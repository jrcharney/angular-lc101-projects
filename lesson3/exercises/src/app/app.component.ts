import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color          = 'green';
  width          = 0;
  height         = 0;
  message        = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  gutterCheck(width,height){
    this.color = (width  < 0 || width  > 260000 || height < 0 || height > 340000) ? 'orange' : 'blue';
  }

  moveRocket(rocketImage,dir){
    let mov;  // movement based on direction
    if(dir === "left"){
      mov = parseInt(rocketImage.style.getPropertyValue("left"),10) - 10;
      rocketImage.style.setProperty("left",`${mov}px`);
      this.width -= 10000;
    }
    else if(dir === "right"){
      mov = parseInt(rocketImage.style.getPropertyValue("left"),10) + 10;
      rocketImage.style.setProperty("left",`${mov}px`);
      this.width += 10000;
    }
    else if(dir === "down"){
      mov = parseInt(rocketImage.style.getPropertyValue("bottom"),10) - 10;
      rocketImage.style.setProperty("bottom",`${mov}px`);
      this.height -= 10000;
    }
    else if(dir === "up"){
      mov = parseInt(rocketImage.style.getPropertyValue("bottom"),10) + 10;
      rocketImage.style.setProperty("bottom",`${mov}px`);
      this.height += 10000;
    }
    // else {}
    this.gutterCheck(this.width,this.height);
  }

  handleTakeOff(){
    if(window.confirm("Are you sure the shuttle is ready for takeoff?")){
      this.color   = 'blue';
      this.width   = 0;
      this.height  = 10000;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage){
    window.alert("The Shuttle is landing. Landing gear enaged.");
    this.color   = 'green';
    this.width   = 0;
    this.height  = 0;
    this.message = 'Shuttle landed.';
    this.takeOffEnabled = true;
    rocketImage.style.setProperty("left","0px");
    rocketImage.style.setProperty("bottom","0px");
  }

  handleMissionAbort(rocketImage){
    if(window.confirm("Are you sure you want to end the mission?")){
      this.color   = 'red';
      this.width   = 0;
      this.height  = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = true;
      rocketImage.style.setProperty("left","0px");
      rocketImage.style.setProperty("bottom","0px");
      }
  }
}
