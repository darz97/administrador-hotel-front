import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../service/cargo.service';
import { Router } from '@angular/router';
import { Cargo } from '../../model/cargo';
import { NgForm } from '@angular/forms';

import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-cargo',
  templateUrl: './formulario-cargo.component.html',
  styleUrls: ['./formulario-cargo.component.css']

})
export class FormularioCargoComponent implements OnInit {

  cargo: Cargo = new Cargo();

  constructor(private cargoService: CargoService, private router: Router) { }

  ngOnInit(): void {
  }

  insert(){
    this.cargoService.insert(this.cargo).subscribe(
      _ => {
        location.reload();
      }
    );
 }


}
