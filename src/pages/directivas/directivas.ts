import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Empleado } from '../../app/interfaces/empleados.interface';

@Component({
  templateUrl: './directivas.html',
  selector: 'app-directivas',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Directivas {
  role: 'admin' | 'user' = 'user';
  isActive = false;
  codigo: string = '403';
  listaCodigos = ['404', '401', '200', '500', '201'];
  felicidadActual = 2;
  listaFelicidad = [1,2,3,4,5,6];

  private respaldo: Empleado[] = [
    {
      nombre: 'Erick Corro',
      activo: false,
      edad: 32,
      email: 'erick@gmail.com',
      habilidades: ['Angualar', 'Flutter', 'Ionic', 'Laravel'],
      id: 1,
      puesto: 'FrontEnd',
    },
    {
      nombre: 'Omar Ramírez',
      activo: true,
      edad: 20,
      email: 'omar@gmail.com',
      habilidades: ['NestJs', 'Bases de datos', 'Docker', 'Angular'],
      puesto: 'Back-end',
      salario: 40000,
      id: 2,
    },
    {
      nombre: 'Damian Gomez',
      activo: true,
      edad: 21,
      email: 'damian@gmail.com',
      habilidades: ['Conducción'],
      puesto: 'Repartidos',
      id: 3,
    },
  ];

  empleados: Empleado[] = this.respaldo;
  emojis: string[] = [];

  activarUsuario() {
    this.isActive = !this.isActive;
  }

  finiquitarEmpleados() {
    this.empleados = [];
  }

  recuperarEmpleados() {
    this.empleados = this.respaldo;
  }

  changeRole() {
    this.role = this.role === 'admin' ? 'user' : 'admin';
  }

  agregarEmpleado(nuevo: Empleado) {
    this.respaldo.push(nuevo);
    this.empleados.push(nuevo);
  }

  agregarEmoji() {
    const cantidad = this.emojis.length;
    if (cantidad === 10) return;
    this.emojis.push('🤯');
  }

  describirCodigo(codigo: string) {
    this.codigo = codigo;
  }

  modificarFelicidad(mas: boolean) {
    const felicidadMaxima = 6;
    if (!mas){
      if (this.felicidadActual === 1) return;
      this.felicidadActual--;
      return;
    }

    if (this.felicidadActual === felicidadMaxima) return;
    this.felicidadActual++;
  }
}
