import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { comparePrices } from '../../app/validators/price-validator';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './productos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Productos {
  formGroup: FormGroup;
  private fb = inject(FormBuilder);

  validationMessages: Record<string, Record<string, string>> = {
    name: {
      required: 'El nombre es obligatorio',
      minlength: 'El nombre debe tener al menos 3 caracteres',
    },
    description: {
      required: 'La descripción es obligatoria',
      minlength: 'Debe tener al menos 15 caracteres',
    },
    imageUrl: {
      required: 'La URL de la imagen es obligatoria',
    },
    stock: {
      required: 'El stock es obligatorio',
      min: 'El stock mínimo es 1',
    },
    entryPrice: {
      required: 'El precio de entrada es obligatorio',
      min: 'Debe ser mayor a 0',
    },
    exitPrice: {
      required: 'El precio de salida es obligatorio',
      min: 'Debe ser mayor a 0',
      differentPrice: 'El precio de salida debe ser mayor que el de entrada',
    },
  };

  constructor() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      imageUrl: ['', [Validators.required]],
      stock: [0, [Validators.required, Validators.min(1)]],
      entryPrice: [0, [Validators.required, Validators.min(1)]],
      exitPrice: [0, [Validators.required, Validators.min(1)]],
    },
    {
      validator: comparePrices(),
    }
  );
  }

  getErrorMessage(controlName: string): string {
    const control = this.formGroup.get(controlName);

    if (!control || !control.errors || !control.touched) {
      return '';
    }

    const errors = control.errors;

    for (const errorKey in errors) {
      if (this.validationMessages[controlName]?.[errorKey]) {
        return this.validationMessages[controlName][errorKey];
      }
    }

    return '';
  }
}
