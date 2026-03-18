import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveForms {

  private fb = inject(FormBuilder);

  productForm: FormGroup;
  empleadoForm: FormGroup;

  validationMessages: any = {
    name: {
      required: 'El nombre es obligatorio',
      minlength: 'El nombre debe tener al menos 3 caracteres',
    },
    lastName: {
      required: 'El apellido es obligatorio',
    },
    perfil: {
      required: 'El perfil es obligatorio',
      minlength: 'El perfil debe tener al menos 30 caracteres',
    },
    edad: {
      required: 'La edad es obligatoria',
      min: 'La edad mínima es 18 años',
      max: 'La edad máxima es 70 años',
    },
    puesto: {
      required: 'El puesto es obligatorio',
    },
    email: {
      required: 'El correo electrónico es obligatorio',
      email: 'El correo electrónico no es válido',
      pattern: 'Formato de correo no valido',
    },
    money: {
      required: 'El salario es obligatorio',
      min: 'El salario mínimo es de $30000',
    },
  };

  constructor() {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      stock: ['', Validators.required],
    });

    this.empleadoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      perfil: ['', [Validators.required, Validators.minLength(30)]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(70)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      puesto: ['', Validators.required],
      money: ['', [Validators.required, Validators.min(30000)]],
    });
  }

  getErrorMessage(controlName: string): string {

    const control = this.empleadoForm.get(controlName);

    if (!control || !control.errors || !control.touched) {
      return '';
    }

    const errors = control.errors;

    for (const errorKey in errors) {
      if (this.validationMessages[controlName][errorKey]) {
        return this.validationMessages[controlName][errorKey];
      }
    }

    return '';
  }

  guardarEmpleado() {

    if (this.empleadoForm.invalid) {
      this.empleadoForm.markAllAsTouched();
      return;
    }

    console.log(this.empleadoForm.value);
  }

  saveProduct() {

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    console.log(this.productForm.value);
  }

}
