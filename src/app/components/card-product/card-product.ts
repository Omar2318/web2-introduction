import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProduct { }
