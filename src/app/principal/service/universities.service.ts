import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from '../interface/ciudad.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesService {
  url: string = environment.url;

  constructor(private http: HttpClient) {}

  universidades(
    paisSeleccionado: string,
    termino: string
  ): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(
      `${this.url}?country=${paisSeleccionado}&name=${termino}`
    );
  }
}
