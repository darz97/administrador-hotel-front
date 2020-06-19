import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../model/cargo';
import { CargoService } from '../../service/cargo.service';
import { FormularioCargoComponent } from '../formulario-cargo/formulario-cargo.component';
@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  cargos: Cargo[] = [];
  formularioCargoComponent: FormularioCargoComponent;
  cargoSeleccionado: Cargo;
  public errorMsg;
  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.errorMsg = '';
    this.cargoService.listar().subscribe(
    (cargos) => {
      this.cargos = cargos;
    }
    );
  }
  showModal(cargo: Cargo){
    this.cargoSeleccionado = cargo;
  }

  onPreUpdateUsuario(cargo: Cargo): void {
    this.cargoService.cargoSeleccionado = Object.assign({}, cargo);
  }
  eliminarCargo(id: number){
    this.cargoService.delete(id).subscribe(
      _ => {
        this.cargos = this.cargos.filter(
          cargo => cargo !== this.cargoSeleccionado
        );
        this.errorMsg = '';
        this.formularioCargoComponent.errorMsgCargo = '';
      },
      error => this.errorMsg = 'No puede eliminar un Cargo que este asignado a un Empleado'
    );

  }


}
