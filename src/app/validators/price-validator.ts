import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function comparePrices(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const entrada = group.get('entryPrice')?.value;
    const salida = group.get('exitPrice')?.value;

    if (!entrada || !salida) return null;

    if (entrada > salida) {
      group.get('exitPrice')?.setErrors({
        differentPrice: true,
      })
    }

    return null;
  }
}
