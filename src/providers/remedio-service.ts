import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import {RemedioInterface} from '../interfaces/remedio-interface';
import {NotificacaoInterface} from '../interfaces/notificacao-interface';


/*
  Generated class for the RemedioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RemedioService {

  public id_remedio: number;
  public id_notificacao: number;
  public listaRemedios: RemedioInterface[];

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello RemedioService Provider');

    storage.get('id_remedio').then((val)=>{
      if(val){
        this.id_remedio = val;
      }else{
        this.id_remedio = 0;
        storage.set('id_remedio',0);
      }
    });

    storage.get('id_notificacao').then((val)=>{
      if(val){
        this.id_notificacao = val;
      }else{
        this.id_notificacao = 0;
        storage.set('id_notificacao',0);
      }
    });

    storage.get('remedios').then((val)=>{
      if(val){
        this.listaRemedios = val;
      }else{
      this.listaRemedios = [];
      storage.set('remedios', []);
      }
    });
    }

  ListaRemedios(){
  	return this.storage.get('remedios');
  }

  AddRemedio(remedio:RemedioInterface){
    remedio.id = this.id_remedio + 1;
    this.storage.set('id_remedio',remedio.id);
    this.listaRemedios.push(remedio);
    this.storage.set('remedios', this.listaRemedios);

    return remedio;

  }

  EditRemedio(remedio:RemedioInterface){
    let lista = this.listaRemedios;
    for(let chave in lista){
      if(lista[chave].id == remedio.id){
        lista[chave] = remedio;
        this.storage.set('remedios', lista);
      }
    }
  }

  DeleteRemedio(remedio: RemedioInterface){
    let lista = this.listaRemedios;
    for(let chave in lista){
      if(lista[chave].id == remedio.id){
        lista.splice(parseInt(chave), 1);
        this.storage.set('remedios', lista);
      }
    }
  }

  AddHorarios(horario: string, remedio: RemedioInterface){
    let aux = horario.split(":");
    let hora = parseInt(aux[0]);
    let minuto = parseInt(aux[1]);
    let id = this.id_notificacao + 1;
    this.storage.set('id_notificacao', id);
    let notificacao: NotificacaoInterface = {id:id, hora:hora, minuto:minuto};
    remedio.notificacoes.push(notificacao);
    this.EditRemedio(remedio);
    return remedio;

  }

  EditHorarios(horario: string, remedio: RemedioInterface, notificacao: NotificacaoInterface){
    let aux = horario.split(":");
    let hora = parseInt(aux[0]);
    let minuto = parseInt(aux[1]);
    notificacao.hora = hora;
    notificacao.minuto = minuto;

    let lista = remedio.notificacoes;
    for(let chave in lista){
      if(lista[chave].id == notificacao.id){
        remedio.notificacoes[chave] = notificacao;
        this.EditRemedio(remedio);
        return remedio;
      }
    }
  }

  DeletHorarios(remedio: RemedioInterface, notificacao: NotificacaoInterface){
    let lista = remedio.notificacoes;
    for(let chave in lista){
      if(lista[chave].id == notificacao.id){
        remedio.notificacoes.splice(parseInt(chave), 1);
        this.EditRemedio(remedio);
        return remedio;
      }
    }
  }

}
