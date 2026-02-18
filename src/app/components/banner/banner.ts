import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Banner {
  constructor(){
    console.log('Componente cargado')
  }
}
