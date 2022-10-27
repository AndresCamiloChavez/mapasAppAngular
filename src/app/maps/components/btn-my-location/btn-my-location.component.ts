import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css'],
})
export class BtnMyLocationComponent implements OnInit {
  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ) {}

  ngOnInit(): void {}
  goToMyLocation() {
    if(!this.placesService.isUserLocationReady) throw new Error('Ocurrió un error, no hay ubicación del usuario')
    if(!this.mapService.isMapReady) throw new Error('Ocurrió un error, no hay un mapa disponible  ')
    
    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
