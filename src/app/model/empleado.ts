import { TipoDocumento } from './tipo-documento';
import { Cargo } from './cargo';

export class Empleado {
  numeroDocumento: string;
    nombre: string;
    apellido: string;
    correo: string;
    tipoDocumento: TipoDocumento;
    cargo: Cargo;
    estadoContrato: string;

}
