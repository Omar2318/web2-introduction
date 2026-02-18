import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Banner } from "../../app/components/banner/banner";
import { CardProduct } from '../../app/components/card-product/card-product';
import { Cupones } from '../../app/components/cupones/cupones';

@Component({
  selector: 'app-defers',
  imports: [Banner, CardProduct, Cupones],
  templateUrl: './defers.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Defers { }
