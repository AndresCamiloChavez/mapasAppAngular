import { Injectable } from '@angular/core';
import { LngLat, LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: Map | undefined;

  get isMapReady() {
    return !!this.map;
  }
  setMap(map: Map) {
    this.map = map;
  }

  flyTo(cords: LngLatLike) {
    if (!this.isMapReady) {
      throw new Error('El mapa no esta inicializado');
    }
    this.map?.flyTo({
      zoom: 14,
      center: cords,
    });
  }

  constructor() {}
}
