import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {LineaModel} from '../models/linea.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getLineas(): Observable<LineaModel[]> {
    return this.http.get<LineaModel[]>(this.url + 'lineas');
  }

}
