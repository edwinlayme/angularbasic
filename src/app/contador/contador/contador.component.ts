import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>
    <button (click)="acumular(base)"> + {{base}}</button>
    <span>{{contador}}</span>
    <button (click)="acumular(-base)"> - {{base}}</button>
    `
})
export class ContadorComponent {
  titulo: string = 'Contador de Visitas';
  contador: number = 0;
  base: number = 5;
  /*sumar()
     {
this.contador+=1;
}
restar()
{
this.contador-=1;
}*/
  acumular(valor: number) {
    this.contador += valor;
  }
}