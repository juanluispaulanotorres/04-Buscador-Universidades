import { Component, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Ciudad } from '../interface/ciudad.interface';
import { UniversitiesService } from '../service/universities.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent {

  termino: string = "";

  @Output() emisor = new EventEmitter<Ciudad[]>();
  listado: Ciudad[] = [];

  @ViewChild("spain") spain!: ElementRef;
  @ViewChild("UK") uk!: ElementRef;
  @ViewChild("portugal") portugal!: ElementRef;

  paisSeleccionado: string = "";

  constructor(private serviceUniversidades: UniversitiesService, private renderer: Renderer2) { }


  sugerencias() {
    this.serviceUniversidades.universidades(this.paisSeleccionado, this.termino)
    .subscribe( (listado) => {
      this.emisor.emit(listado);
    })
  }

  getSpain() {
    this.paisSeleccionado = this.spain.nativeElement.value;

    this.renderer.addClass(this.spain.nativeElement, "btn-success");

    this.renderer.removeClass(this.uk.nativeElement, "btn-success");
    this.renderer.removeClass(this.portugal.nativeElement, "btn-success");
  }

  getKU() {
    this.paisSeleccionado = this.uk.nativeElement.value;

    this.renderer.addClass(this.uk.nativeElement, "btn-success");

    this.renderer.removeClass(this.spain.nativeElement, "btn-success");
    this.renderer.removeClass(this.portugal.nativeElement, "btn-success");
  }

  getPortugal() {
    this.paisSeleccionado = this.portugal.nativeElement.value;

    this.renderer.addClass(this.portugal.nativeElement, "btn-success");

    this.renderer.removeClass(this.uk.nativeElement, "btn-success");
    this.renderer.removeClass(this.spain.nativeElement, "btn-success");
  }

}
