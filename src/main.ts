import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVzY3oiLCJhIjoiY2t2NGI5ZXUyMHl4MzJ1bm45aHNmOXFtcCJ9.AERwyW4tEeeqje90P-b98w';

if(!navigator.geolocation){
  alert('Navegador no soporta la geolocation')
  throw new Error('Navegador no soporta la geolocation');
}
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
