import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.scss']
})
export class CarCardComponent {
  @Input() vehicle: any;

  irADetalles(): void {
    console.log('Navegando a detalles del vehículo:', this.vehicle);
    // Aquí puedes añadir la lógica de navegación o cualquier acción que desees realizar.
  }
}
