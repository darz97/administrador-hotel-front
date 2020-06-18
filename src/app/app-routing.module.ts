import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { FormularioCargoComponent } from './components/formulario-cargo/formulario-cargo.component';
import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';
import { CargoModalComponent } from './components/cargo-modal/cargo-modal.component';
import { EmpleadoModalComponent } from './components/empleado-modal/empleado-modal.component';

const routes: Routes = [
  {path: 'empleado-modal', component: EmpleadoModalComponent},
  {path: 'cargo-modal', component: CargoModalComponent},
  {path: 'formulario-empleado', component: FormularioEmpleadoComponent},
  {path: 'formulario-cargo', component: FormularioCargoComponent},
  {path: 'cargo', component: CargoComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
