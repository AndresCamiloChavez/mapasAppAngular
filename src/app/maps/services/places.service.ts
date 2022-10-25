import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation: [number, number] | undefined;

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }
  constructor() {
    this.getUserLocation();
  }
  async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolver, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolver(this.userLocation);
        },
        (error) => {
          console.log(error);
          alert('No se pudo obtener la geolocalización');
          reject();
        }
      );
    });
  }


}
