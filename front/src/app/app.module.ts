import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { CarCardComponent } from './components/carcard/carcard.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VehicleGridComponent } from './components/vehicle-grid/vehicle-grid.component'; // Importa FormsModule


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    CarCardComponent,
    VehiclesComponent,
    VehicleGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
