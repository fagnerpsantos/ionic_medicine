import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {RemedioInterface} from '../../interfaces/remedio-interface';
import {RemedioService} from '../../providers/remedio-service';



/*
  Generated class for the Detalhe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html'
})
export class DetalhePage {

	public remedio: RemedioInterface;
	public horario: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public RemedioService: RemedioService) {
  	this.remedio = navParams.get('remedio');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

  trataRepetir(repetir:string){
  	if(repetir === ""){
  		return "Não";
  	}else if(repetir === "day"){
  		return "Dia";
  	}else if (repetir === "week"){
  		return "Semana";
  	}else if (repetir === "month"){
  		return "Mês";
  	}
  }

  trataToque(toque:string){
  	if(toque === "res://platform_default"){
  		return "Toque Padrão";
  	}else if(toque === "file://assets/audio/audio1.wav"){
  		return "Toque 1";
  	}
  }

  adicionaHorario(){
  	console.log(this.horario);
    this.remedio = this.RemedioService.AddHorarios(this.horario, this.remedio);
  }

  trataMinuto(minuto){
  if(minuto < 10){
    return '0'+minuto;
  }else{
    return minuto;
  }
  }

}
