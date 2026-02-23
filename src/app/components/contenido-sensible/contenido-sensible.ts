import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contenido-sensible',
  imports: [],
  templateUrl: './contenido-sensible.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContenidoSensible {
  constructor(){
    console.log('Componente contendio sensible')
  }
}
