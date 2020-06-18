import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';
import { FormularioCargoComponent } from './components/formulario-cargo/formulario-cargo.component';
import { CargoModalComponent } from './components/cargo-modal/cargo-modal.component';
import { CommonModule } from '@angular/common';
import { EmpleadoModalComponent } from './components/empleado-modal/empleado-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CargoComponent,
    EmpleadoComponent,
    HomeComponent,
    MenuComponent,
    FormularioEmpleadoComponent,
    FormularioCargoComponent,
    CargoModalComponent,
    EmpleadoModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
