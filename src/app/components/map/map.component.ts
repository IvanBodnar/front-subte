import {Component, OnInit} from '@angular/core';

import {MapService} from '../../services/map.service';
import {LineaModel} from '../../models/linea.model';
// import {L} from 'leaflet';

declare const L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit() {

    const map = L.map('map').setView([-34.608891, -58.448817], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    setTimeout(() => {
      L.geoJSON(this.mapService.lineasArray).addTo(map);
    });

  }


}
