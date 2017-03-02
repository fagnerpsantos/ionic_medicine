import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FormRemedioPage } from '../form-remedio/form-remedio';
import { DetalhePage } from '../detalhe/detalhe';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public RemedioService: RemedioService) {
  	//console.log(RemedioService.ListaRemedios());

  }

  ionViewDidEnter() {
      this.RemedioService.ListaRemedios().then((data)=>{
        this.listaRemedios = data;
    })
  }

  abreFormRemedio(){
    this.navCtrl.push(FormRemedioPage);

  }

  abreDetalhe(remedio: RemedioInterface){
    this.navCtrl.push(DetalhePage,{remedio:remedio});
  }

}
