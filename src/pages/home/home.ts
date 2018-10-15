import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  boc = BocinaPage;

  constructor(public navCtrl: NavController) {

  }

  clickBocina(){
    this.navCtrl.push(this.boc);
  }
}
