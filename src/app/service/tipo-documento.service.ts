import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoDocumento } from '../model/tipo-documento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor(private tipoDocumento: HttpClient) { }

  listar(): Observable<TipoDocumento[]> {
    return this.tipoDocumento.get<TipoDocumento[]>('http://localhost:8080/tipodocumentos/tipoDocumento');
  }


}
