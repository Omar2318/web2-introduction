import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const usados = ['soygarcca', 'renji','emilianito21', 'minicopsito'];

export function userValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const userName: string | null = group.get('userName')?.value;
    if (!userName) return null;

    if (usados.includes(userName.toLowerCase())) {
      group.get('userName')?.setErrors({
        ocupado: true,
      })
    }

    return null;
  }
}
