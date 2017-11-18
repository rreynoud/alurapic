// alurapic/client/app/app.component.ts
import {Component, Inject} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    
    fotos: Object[] = [];

    constructor(http: Http) {        
        
        console.log('Construindo AppComponent');

        
        let stream = http.get('v1/fotos');
        
        console.log('indo consultar');

        stream.subscribe(res => {
            this.fotos = res.json(); // that é a instância da classe Foto
            console.log('Resposta da consulta');
            console.log(this.fotos);
        });        

    }    
}