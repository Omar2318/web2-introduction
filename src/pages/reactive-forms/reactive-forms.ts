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

  constructor(){
    this.productForm = this.fb.group({
      name: [,Validators.required],
      description: [],
      price: [,Validators.required],
      stock: [,Validators.required],
    });
  }

  saveProduct() {

    if(this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    };
    console.log(this.productForm.value);
  }
}
