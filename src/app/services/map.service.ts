import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {LineaModel} from '../models/linea.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  lineasArray: LineaModel[];

  constructor(
    private dataService: DataService
  ) { }

  init(): void {
    this.dataService.getLineas()
      .subscribe(
        lineas => {
          this.lineasArray = lineas;
        }
      );
  }

}
