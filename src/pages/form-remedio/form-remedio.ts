import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {DetalhePage} from '../detalhe/detalhe';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public RemedioService: RemedioService) {
  	if(navParams.get('remedio')){
  		this.tituloPagina = 'Editando Remédio';
  		this.editando = true;
  		this.remedio = navParams.get('remedio');
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormRemedioPage');
  }

  adicionaRemedio(){
  	if(this.remedio.nome != '' && this.remedio.descricao != ''){
  		this.remedio = this.RemedioService.AddRemedio(this.remedio);
  		this.navCtrl.pop();
  		this.navCtrl.push(DetalhePage, {remedio:this.remedio});

  	} 	
  }

  cancelarFormulario(){
  this.navCtrl.pop();

  }

  editaRemedio(){
  	if(this.remedio.nome != '' && this.remedio.descricao != ''){
  		this.RemedioService.EditRemedio(this.remedio);
  		this.navCtrl.pop();
  		this.navCtrl.push(DetalhePage, {remedio:this.remedio});
  	} 
  }

}
