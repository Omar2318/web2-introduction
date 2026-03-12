import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-examen',
  imports: [],
  templateUrl: './examen.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Examen {
  clearFrameworks() {
    this.frameworks = [];
  }

  frameworks = ['angular', 'nest', 'next','laravel'];

}
