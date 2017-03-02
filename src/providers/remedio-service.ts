import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import {RemedioInterface} from '../interfaces/remedio-interface';


/*
  Generated class for the RemedioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RemedioService {

  public id_remedio: number;
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


  }

}
