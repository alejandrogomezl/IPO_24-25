import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchQuery: string = ''; // Variable para almacenar el término de búsqueda

  // Método para realizar la búsqueda
  onSearch() {
    if (this.searchQuery.trim()) {
      console.log("Término de búsqueda:", this.searchQuery); // Imprime el término en la consola
    }
  }
}
