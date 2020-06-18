import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../service/cargo.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cargo-modal',
  templateUrl: './cargo-modal.component.html',
  styleUrls: ['./cargo-modal.component.css']
})
export class CargoModalComponent implements OnInit {

  constructor( public cargoService: CargoService,  private location: Location) { }

  ngOnInit(): void {
  }
  guardandoCargo(cargoForm: NgForm): void{

      // Actualiza usuario
    this.cargoService.update(cargoForm.value, cargoForm.value.cargoId).subscribe(
      _ => {
         location.reload();
       }
      );
    }


}
