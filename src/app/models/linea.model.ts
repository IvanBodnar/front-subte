import {Geometry} from './common.model';


interface LineaProperties {
  linea: string;
}

export interface LineaModel {
  _id: string;
  type: string;
  geometry: Geometry;
  properties: LineaProperties;
}
