import {Place} from './place';

describe('Place', () => {
  it('should create an instance', () => {
    expect(new Place()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let place = new Place({
      name: 'place 1'
    });
    expect(place.name).toEqual('place 1');
  });
});
