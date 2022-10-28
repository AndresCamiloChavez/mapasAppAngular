import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api/placesApiClient';
import { Place, Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation: [number, number] | undefined;

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];


  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }
  constructor(
    // private http: HttpClient,
    private placesApiClient: PlacesApiClient,
    ) {
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

  getPlacesByQuery(query: string = '') {
    this.isLoadingPlaces = true;
    this.placesApiClient
      .get<Place>(
        `/${query}.json`,
        {
          params: {
            proximity: this.userLocation?.join(',')
          }
        }
      )
      .subscribe({
        next: (values) =>{
          this.isLoadingPlaces = false;
          this.places = values.features;
        },
        error: (e) =>{
          this.isLoadingPlaces = false;
        }
      });
  }
}
