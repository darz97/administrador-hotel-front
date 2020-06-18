import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/model/cargo';
import { EmpleadoService } from '../../service/empleado.service';
import { CargoService } from '../../service/cargo.service';
import { NgForm } from '@angular/forms';
import { TipoDocumento } from '../../model/tipo-documento';
import { TipoDocumentoService } from '../../service/tipo-documento.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empleado-modal',
  templateUrl: './empleado-modal.component.html',
  styleUrls: ['./empleado-modal.component.css']
})
export class EmpleadoModalComponent implements OnInit {
  cargos: Cargo[] = [];
  tipoDocumentos: TipoDocumento[] = [];
  constructor( public empleadoService: EmpleadoService, private cargoService: CargoService,
               private tipoDocumentoService: TipoDocumentoService, private location: Location) {
  }

  ngOnInit(): void {
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

  update(empleadoForm: NgForm): void{

    this.empleadoService.update(empleadoForm.value, empleadoForm.value.numeroDocumento).subscribe(
      _ => {
       location.reload();
      }
    );

  }

}
