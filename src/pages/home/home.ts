import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  value1: number;
  value2: number;
  constructor(public navCtrl: NavController) {
      this.value1=0;
      this.value2=0;
  }

  
  teamAScore(num : number){
    if(num == 3){
      this.value1 += num;
    }else if( num == 2){
      this.value1 += num;
    }else{
      this.value1 += num;
    }
  }

  teamBScore(num : number){
    if(num == 3){
      this.value2 += num;
    }else if( num == 2){
      this.value2 += num;
    }else{
      this.value2 += num;
    }
  }

  submit(){
    this.value1 = 0;
    this.value2 = 0;
  }
}
