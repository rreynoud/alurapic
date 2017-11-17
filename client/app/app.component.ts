// alurapic/client/app/app.component.ts
import {Component, Inject} from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    fotos = [];

    constructor(@Inject(Http) http) {        
        
    }    
}