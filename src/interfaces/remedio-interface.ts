import {NotificacaoInterface} from './notificacao-interface';

export interface RemedioInterface{
	id?: number;
	nome: string;
	descricao: string;
	toque: string;
	foto: string;
	repetir: string;
	notificacoes: NotificacaoInterface[];
}