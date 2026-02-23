import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Banner } from "../../app/components/banner/banner";
import { CardProduct } from '../../app/components/card-product/card-product';
import { Cupones } from '../../app/components/cupones/cupones';
import { ContenidoSensible } from '../../app/components/contenido-sensible/contenido-sensible';
import { Comentarios } from "../../app/components/comentarios/comentarios";
import { FormRegistro } from '../../app/components/form-registro/form-registro';

@Component({
  selector: 'app-defers',
  imports: [Banner, CardProduct, Cupones, ContenidoSensible, Comentarios, FormRegistro],
  templateUrl: './defers.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Defers {
  constructor(){
    console.log('first')
  }
 }
