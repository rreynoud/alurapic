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

        http.get('v1/fotos').subscribe(res => {
            this.fotos = res.json();
            console.log('Resposta da consulta');
            console.log(this.fotos);
        });
        
    }    
}