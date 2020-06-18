import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  HeaderText = new HttpHeaders({'Content-type': 'text/plain'});
  endPointActualizar = 'http://localhost:8080/Empleados/';
  endPointEliminar = 'http://localhost:8080/Empleados/';
  endPointUpdateByStatus = 'http://localhost:8080/Empleados';
  public empleadoSeleccionado: Empleado = new Empleado();


  constructor(private empleado: HttpClient) { }

  listar(): Observable<Empleado[]> {
    return this.empleado.get<Empleado[]>('http://localhost:8080/Empleados/empleados');
  }

  insert( empleado: Empleado): Observable<Empleado> {
    return this.empleado.post<Empleado> ('http://localhost:8080/Empleados/empleado',
    empleado , { headers: new HttpHeaders({'Content-type': 'application/json'}) });

  }

  update( empleado, numeroDocumento: string ){
    return this.empleado.put<Empleado>(this.endPointActualizar.concat(numeroDocumento).concat('/empleado'),
    empleado, { headers: new HttpHeaders({'Content-type': 'application/json'})});
  }

  delete(numeroDocumento: string){
    return this.empleado.delete<Empleado>(this.endPointEliminar.concat(numeroDocumento.toString()).concat('/empleado'),
    {headers: this.HeaderText});

  }
  updateByStatus(numeroDocumento: string){
    return this.empleado.put<Empleado>(this.endPointUpdateByStatus.concat('/empleado').concat('/inactivo/').concat(numeroDocumento),
    {headers: this.HeaderText});
  }
}
