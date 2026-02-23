import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Banner } from "../../app/components/banner/banner";
import { CardProduct } from '../../app/components/card-product/card-product';
import { Cupones } from '../../app/components/cupones/cupones';
import { ContenidoSensible } from '../../app/components/contenido-sensible/contenido-sensible';

@Component({
  selector: 'app-defers',
  imports: [Banner, CardProduct, Cupones, ContenidoSensible],
  templateUrl: './defers.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Defers { }
