import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ciudad } from '../interface/ciudad.interface';
import { UniversitiesService } from '../service/universities.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {
  termino: string = '';
  disabled = true;

  @Output() emisor = new EventEmitter<Ciudad[]>();
  listado: Ciudad[] = [];

  @ViewChild('spain') spain!: ElementRef;
  @ViewChild('UK') uk!: ElementRef;
  @ViewChild('portugal') portugal!: ElementRef;

  paisSeleccionado: string = '';

  spainColor: boolean = false;
  ukColor: boolean = false;
  portugalColor: boolean = false;

  constructor(private serviceUniversidades: UniversitiesService) {}

  sugerencias() {
    this.serviceUniversidades
      .universidades(this.paisSeleccionado, this.termino)
      .subscribe((listado) => {
        this.listado = listado;
        if (this.termino.length == 0) {
          this.listado = [];
          this.emitirListado();
        } else {
          this.emitirListado();
        }
      });
  }

  getSpain() {
    this.disabled = false;

    // Borrar el input y vaciar array y emitirlo para que no aparezca el listado de universidades al cambiar el país
    this.resetData();

    this.paisSeleccionado = this.spain.nativeElement.value;

    // Cambio de color al hacer click sobre el botón del país correspondiente
    this.spainColor = true;
    this.ukColor = false;
    this.portugalColor = false;
  }

  getUK() {
    this.disabled = false;

    this.resetData();

    this.paisSeleccionado = this.uk.nativeElement.value;

    this.spainColor = false;
    this.ukColor = true;
    this.portugalColor = false;
  }

  getPortugal() {
    this.disabled = false;

    this.resetData();

    this.paisSeleccionado = this.portugal.nativeElement.value;

    this.spainColor = false;
    this.ukColor = false;
    this.portugalColor = true;
  }

  emitirListado() {
    this.emisor.emit(this.listado);
  }

  resetData() {
    this.listado = [];
    this.emitirListado();
    this.termino = '';
  }
}
