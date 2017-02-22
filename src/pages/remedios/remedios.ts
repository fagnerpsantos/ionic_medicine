import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {RemedioService} from '../../providers/remedio-service';
import {RemedioInterface} from '../../interfaces/remedio-interface';

/*
  Generated class for the Remedios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-remedios',
  templateUrl: 'remedios.html'
})
export class RemediosPage {

public listaRemedios: RemedioInterface[];

  constructor(public navCtrl: NavController, public navParams: NavParams, RemedioService: RemedioService) {
  	//console.log(RemedioService.ListaRemedios());
  	this.listaRemedios = RemedioService.ListaRemedios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemediosPage');
  }

}
