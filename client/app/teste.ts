// alurapic/client/app/app.module.ts

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { A }   from './a';
import { B }   from './b';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ A, B ],
  bootstrap:    [ B ]
})
export class AppModule { }