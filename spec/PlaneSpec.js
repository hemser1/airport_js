'use strict';

describe('Plane', function() {
    var plane;
    var airport;
    beforeEach(function(){
      plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeoff']);
    });
    it('can land at airport', function(){
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
    it('can take off from an airport', function() {
        plane.land(airport);
        plane.takeoff(airport);
        expect(airport.clearForTakeoff).toHaveBeenCalled();
    });
});