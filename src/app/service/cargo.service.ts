import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  HeaderText = new HttpHeaders({'Content-type': 'text/plain'});

  public cargoSeleccionado: Cargo = new Cargo();
  endPointActualizar = 'http://localhost:8080/cargos/';
  endPointEliminar = 'http://localhost:8080/cargos/';
  endPointEncontrar = 'http://localhost:8080/cargos/';


  constructor(private cargo: HttpClient) { }

  listar(): Observable<Cargo[]> {
    return this.cargo.get<Cargo[]>('http://localhost:8080/cargos/cargos');
  }

  insert( cargo: Cargo): Observable<Cargo> {
    return this.cargo.post<Cargo> ('http://localhost:8080/cargos/cargo',
    cargo , { headers: new HttpHeaders({'Content-type': 'application/json'}) });

  }

  update( cargo, id: number ){
    return this.cargo.put<Cargo>(this.endPointActualizar.concat(id.toString()).concat('/cargo'),
    cargo, { headers: new HttpHeaders({'Content-type': 'application/json'})});
  }

  delete(id: number){
    return this.cargo.delete<Cargo>(this.endPointEliminar.concat(id.toString()).concat('/cargo'),
    {headers: this.HeaderText});

  }
  encontrarCargo(id: number): Observable<Cargo>{
    return this.cargo.get<Cargo>(this.endPointEncontrar.concat(id.toString()).concat('/cargo'));
}
}
