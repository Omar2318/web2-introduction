import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  imports: [],
  templateUrl: './comentarios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comentarios {
  constructor(){
    console.log('cargado')
  }
 }
