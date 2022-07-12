import { Component, OnInit } from '@angular/core';
import { Ciudad } from './interface/ciudad.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listado!: Ciudad[];

  recibirListado(listado: Ciudad[]) {
    this.listado = listado;
  }
}
