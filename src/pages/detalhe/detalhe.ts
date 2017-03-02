import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {RemedioInterface} from '../../interfaces/remedio-interface';
import {RemedioService} from '../../providers/remedio-service';
import {NotificacaoInterface} from '../../interfaces/notificacao-interface';

import {FormRemedioPage} from '../form-remedio/form-remedio';



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
  public editandoHorario: boolean = false;
  public editandoNotificacao: NotificacaoInterface;

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

  editarHorario(horario: NotificacaoInterface){
    this.editandoHorario = true;
    this.horario = horario.hora + ":" + this.trataMinuto(horario.minuto);
    this.editandoNotificacao = horario;
  }


  atualizaHorario(){
    this.remedio = this.RemedioService.EditHorarios(this.horario, this.remedio, this.editandoNotificacao);
    this.editandoHorario = false;
  }

  cancelarEditar(){
  this.editandoHorario = false;
  }

  deletarHorario(horario: NotificacaoInterface){
    this.remedio = this.RemedioService.DeletHorarios(this.remedio, horario);
    this.editandoHorario = false;
  }

  abreEditaRemedio(){
    this.navCtrl.pop();
    this.navCtrl.push(FormRemedioPage, {remedio: this.remedio});

  }

  removeRemedio(){
    this.RemedioService.DeleteRemedio(this.remedio);
    this.navCtrl.pop();

  }

}
