import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent {
  heroes: string[] = ['Spirderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = "";

  borrarHeroe() {
    console.log('Heroe Borrado...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
