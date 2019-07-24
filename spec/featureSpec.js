'use strict';

describe('Airport', function() {
    var plane;
    var airport;
  
    beforeEach(function(){
      plane = new Plane();
      airport = new Airport();
    });
  
    describe('under normal conditions',function(){
        beforeEach(function(){
          spyOn(Math,'random').and.returnValue(0);
        });

        it('lands a plane', function() {
            plane.land(airport);
            expect(airport.planes()).toContain(plane);
        });

        it('planes can be instructed to take off', function() {
            plane.land(airport);
            plane.takeoff(airport);
            expect(airport.planes()).toEqual([]);
        });
    });
    describe('under stormy conditions', function() {
        it('but blocks takeoff when the weather is stormy', function() {
            spyOn(Math, 'random').and.returnValue(0);
            plane.land(airport);
            spyOn(airport._weather, 'isStormy').and.returnValue(true);
            expect(function(){ plane.takeoff();}).toThrowError('it is stormy');
            expect(airport.planes()).toContain(plane);
        });

        it('blocks landing when weather is stormy', function(){
            spyOn(Math,'random').and.returnValue(1);
            expect(function(){ plane.land(airport); }).toThrowError('it is stormy');
            expect(airport.planes()).toEqual([]);
          
        });
    });
});
