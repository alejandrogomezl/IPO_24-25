// src/app/pages/vehicles/vehicles.component.ts
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.loading = true;
    this.vehicleService.getVehicles().subscribe(
      data => {
        this.vehicles = data;
        this.loading = false;
      },
      error => {
        console.error('Error al obtener los vehículos', error);
        this.errorMessage = 'Hubo un problema al cargar los vehículos. Por favor, inténtalo de nuevo más tarde.';
        this.loading = false;
      }
    );
  }
}
