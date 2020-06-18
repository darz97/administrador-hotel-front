import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../service/cargo.service';
import { Cargo } from 'src/app/model/cargo';
import { EmpleadoService } from '../../service/empleado.service';
import { Empleado } from 'src/app/model/empleado';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  cargo: Cargo = new Cargo();
  empleados: Empleado[] = [];
  empleadoSeleccionado: Empleado;
  constructor( private empleadoService: EmpleadoService, private location: Location) { }

  ngOnInit(): void {
    this.empleadoService.listar().subscribe(
      (empleados) => {
        this.empleados = empleados;
      }
      );

  }
  showModal(empleado: Empleado){
    this.empleadoSeleccionado = empleado;
  }

  onPreUpdateEmpleado(empleado: Empleado): void {
    this.empleadoService.empleadoSeleccionado = Object.assign({}, empleado);
  }

  desvincularEmpleado(numeroDocumento: string){
    this.empleadoService.updateByStatus(numeroDocumento).subscribe(
      _ => {
        location.reload();
      }

    );

  }
  vincularEmpleado(numeroDocumento: string){
    this.empleadoService.vincular(numeroDocumento).subscribe(
      _ => {
        location.reload();
      }

    );

  }
  eliminarEmpleado(numeroDocumento: string){
    this.empleadoService.delete(numeroDocumento).subscribe(
      _ => {
        this.empleados = this.empleados.filter(
          empleado => empleado !== this.empleadoSeleccionado
        );
      }

    );

  }

}
