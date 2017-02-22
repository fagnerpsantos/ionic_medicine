import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RemedioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RemedioService {

  constructor(public http: Http) {
    console.log('Hello RemedioService Provider');
  }

  ListaRemedios(){
  	return [
  		{id: 1, nome: 'Remédio 1', descricao: 'Descrição', toque:'', foto:'', repetir: '', notificacoes:[]}
  	];
  }

}
