/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {Place} from './place';
import { PlaceDataService } from './place-data.service';

describe('PlaceDataService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PlaceDataService]
		});
	});

	it('should ...', inject([PlaceDataService], (service: PlaceDataService) => {
		expect(service).toBeTruthy();
	}));

	describe('##getAllPlaces()', () => {
		it('should return an empty array by default', inject([PlaceDataService], (service: PlaceDataService) => {
			expect(service.getAllPlaces()).toEqual([]);
		}));

		it('should return all places', inject([PlaceDataService], (service: PlaceDataService) => {
			let place1 = new Place({name: 'Place 1'});
			let place2 = new Place({name: 'Place 2'});

			service.addPlace(place1);
			service.addPlace(place2);

			expect(service.getAllPlaces()).toEqual([place1, place2]);
		}));
	});

	describe('##save(place)', () => {
		it('should automatically assign in incrementing id', inject([PlaceDataService], (service: PlaceDataService) => {
			let place1 = new Place({name: 'Place 1'});
			let place2 = new Place({name: 'Place 2'});

			service.addPlace(place1);
			service.addPlace(place2);

			expect(service.getPlaceById(1)).toEqual(place1);
			expect(service.getPlaceById(2)).toEqual(place2);
		}));
	});

	describe('##deletePlaceById(id)', () => {
		it('should remove place with the corresponding id', inject([PlaceDataService], (service: PlaceDataService) => {
			let place1 = new Place({title: 'Place 1', complete: false});
			let place2 = new Place({title: 'Place 2', complete: true});

			service.addPlace(place1);
			service.addPlace(place2);

			expect(service.getAllPlaces()).toEqual([place1, place2]);

			service.deletePlaceById(1);
			expect(service.getAllPlaces()).toEqual([place2]);

			service.deletePlaceById(2);
			expect(service.getAllPlaces()).toEqual([]);
		}));

		it('should not removing anything if place with corresponding id is not found', inject([PlaceDataService], (service: PlaceDataService) => {
			let place1 = new Place({title: 'Place 1', complete: false});
			let place2 = new Place({title: 'Place 2', complete: true});

			service.addPlace(place1);
			service.addPlace(place2);

			expect(service.getAllPlaces()).toEqual([place1, place2]);
			service.deletePlaceById(3);
			expect(service.getAllPlaces()).toEqual([place1, place2]);
		}));
	});

	describe('##updatePlaceById(id, values)', () => {
		it('should return place with the corresponding id and updated data', inject([PlaceDataService], (service: PlaceDataService) => {
			let place = new Place({name: 'Place 1'});
			service.addPlace(place);

			let updatedPlace = service.updatePlaceById(1, {
				name: 'new name place 1'
			});

			expect(updatedPlace.name).toEqual('new name place 1');
		}));

		it('should return null if place is not found', inject([PlaceDataService], (service: PlaceDataService) => {
			let place = new Place({name: 'Place 1'});
			service.addPlace(place);

			let updatedPlace = service.updatePlaceById(2, {
				name: 'new name place 1'
			});

			expect(updatedPlace).toEqual(null);
		}));
	});	
});
