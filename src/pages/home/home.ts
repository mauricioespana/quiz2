import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { SmartPage } from '../smart/smart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  boc = BocinaPage;
  smart = SmartPage;
  constructor(public navCtrl: NavController) {

  }

  clickBocina(){
    this.navCtrl.push(this.boc);
  }
  clickSmart(){
    this.navCtrl.push(this.smart);
  }
}
