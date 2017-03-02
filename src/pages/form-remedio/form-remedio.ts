import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {RemedioService} from '../../providers/remedio-service';
import {RemedioInterface} from '../../interfaces/remedio-interface';


/*
  Generated class for the FormRemedio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form-remedio',
  templateUrl: 'form-remedio.html'
})
export class FormRemedioPage {
	public tituloPagina: string = 'Adiciona Remédio';
	public editando: boolean = false;
	public remedio: RemedioInterface = {nome:'', descricao:'', toque:'', foto:'',  repetir:'', notificacoes:[]};

  constructor(public navCtrl: NavController, public navParams: NavParams, public RemedioService: RemedioService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormRemedioPage');
  }

  adicionaRemedio(){
  	if(this.remedio.nome != '' && this.remedio.descricao != ''){
  		this.RemedioService.AddRemedio(this.remedio);
  		this.navCtrl.pop();
  	} 
  	

  }

}
