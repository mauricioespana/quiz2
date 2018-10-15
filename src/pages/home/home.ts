import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { SmartPage } from '../smart/smart';
import { TvPage } from '../tv/tv';
import { LampPage } from '../lamp/lamp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  boc = BocinaPage;
  smart = SmartPage;
  tv  = TvPage;
  lamp = LampPage;

  constructor(public navCtrl: NavController) {

  }

  clickBocina(){
    this.navCtrl.push(this.boc);
  }
  clickSmart(){
    this.navCtrl.push(this.smart);
  }
  clickTv(){
    this.navCtrl.push(this.tv);
  }
  clickLamp(){
    this.navCtrl.push(this.lamp);
  }
}
