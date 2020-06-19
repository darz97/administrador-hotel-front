import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../service/empleado.service';
import { Location } from '@angular/common';
import { Empleado } from 'src/app/model/empleado';
import { CargoService } from '../../service/cargo.service';
import { TipoDocumento } from '../../model/tipo-documento';
import { Cargo } from 'src/app/model/cargo';
import { TipoDocumentoService } from '../../service/tipo-documento.service';
@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();
  cargos: Cargo[] = [];

  tipoDocumentos: TipoDocumento[] = [];
  public errorMsgEmpleado;
  constructor( private empleadoService: EmpleadoService, private cargoService: CargoService,
               private tipoDocumentoService: TipoDocumentoService) { }

  ngOnInit(): void {
    this.errorMsgEmpleado = '';
    this.cargoService.listar().subscribe(
      (cargos) => {
        this.cargos = cargos;
      }
    );

    this.tipoDocumentoService.listar().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );
  }
    insert(){
      this.empleadoService.insert(this.empleado).subscribe(
        _ => {
          location.reload();
        },
        error => this.errorMsgEmpleado = 'No se puede agregar el Empleado'
      );
    }

  }
