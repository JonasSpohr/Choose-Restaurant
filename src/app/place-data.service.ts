import { Injectable } from '@angular/core';

@Injectable()
export class PlaceDataService {

	lastId: number = 0;
	places: Place[] = [];

	constructor() { }

	// Simulate POST /places
	addPlace(place: Place): PlaceDataService {
		if (!place.id) {
			place.id = ++this.lastId;
		}
		this.places.push(place);
		return this;
	}

  // Simulate DELETE /places/:id
  deletePlaceById(id: number): PlaceDataService {
  	this.places = this.places
  	.filter(place => place.id !== id);
  	return this;
  }

  // Simulate PUT /places/:id
  updatePlaceById(id: number, values: Object = {}): Place {
  	let place = this.getPlaceById(id);
  	if (!place) {
  		return null;
  	}
  	Object.assign(place, values);
  	return place;
  }

  // Simulate GET /places
  getAllPlaces(): Place[] {
  	return this.places;
  }

  // Simulate GET /places/:id
  getPlaceById(id: number): Place {
  	return this.places
  	.filter(place => place.id === id)
  	.pop();
  }

}
