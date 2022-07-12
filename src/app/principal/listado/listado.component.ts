import { Component, Input } from '@angular/core';
import { Ciudad } from '../interface/ciudad.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      li {
        list-style: none;
      }
    `,
  ],
})
export class ListadoComponent {
  @Input() listado!: Ciudad[];

  constructor() {}
}
