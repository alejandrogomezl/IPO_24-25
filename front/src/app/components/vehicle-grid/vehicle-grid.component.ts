import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service'; // Asegúrate de que esta ruta sea correcta
import { Vehicle } from 'src/app/models/vehicle.model'; // Añade esta línea si creas un modelo de tipo `Vehicle`

@Component({
  selector: 'app-vehicle-grid',
  templateUrl: './vehicle-grid.component.html',
  styleUrls: ['./vehicle-grid.component.scss']
})
export class VehicleGridComponent implements OnInit {
  vehicles: Vehicle[] = []; // Cambia `any` por `Vehicle` si tienes un modelo de tipo Vehicle

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(
      (data: Vehicle[]) => { // Define el tipo `Vehicle[]`
        this.vehicles = data;
      },
      (error: any) => { // Define el tipo `any` o algún otro tipo específico para errores
        console.error('Error al obtener vehículos:', error);
      }
    );
  }
}

