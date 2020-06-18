import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../model/cargo';
import { CargoService } from '../../service/cargo.service';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  cargos: Cargo[] = [];

  cargoSeleccionado: Cargo;
  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {

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
      }

    );

  }


}
