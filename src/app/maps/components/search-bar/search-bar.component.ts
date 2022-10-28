import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private placesService: PlacesService) {}

  private debounceTimer?: NodeJS.Timeout;
  ngOnInit(): void {}

  onQueryChanged(query: string) {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
  
      this.placesService.getPlacesByQuery(query);
      
    }, 1000);
  }
}
