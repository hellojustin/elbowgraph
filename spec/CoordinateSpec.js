define(

  [ '../src/Coordinate',
    'SpecHelper' ],

  function( Coordinate ) {

    describe( 'Coordinate', function() {

      describe( 'when instantiated with no parameters',  function() {
        
        beforeEach( function() {
          coordinate = new Coordinate();
        } );

        it( 'should exist as an object', function() {
          expect( coordinate ).toBeDefined();
          expect( typeof coordinate ).toEqual( 'object');
        } );

        it( 'should return the default X value via an accessor', function() {
          expect( coordinate.getX() ).toEqual( 0 );
        } );

        it( 'should return the default Y value via an accessor', function() {
          expect( coordinate.getY() ).toEqual( 0 );
        } );

        it( 'should return the default X and Y values as an array', function() {
          expect( coordinate.toArray() ).toEqual( [ 0, 0 ] );
        } );

        it( 'should return the default X and Y values as a string', function() {
          expect( coordinate.toString() ).toEqual( '0,0' );
        } );

      } );

      describe( 'when instantiated with X and Y values', function() {

        var coordinate,
            xValue = 100,
            yValue = 200;

        beforeEach( function() {
          coordinate = new Coordinate( xValue, yValue );
        } );

        it( 'should exist as an object', function() {
          expect( coordinate ).toBeDefined();
          expect( typeof coordinate ).toEqual( 'object' );
        } );

        it( 'should not return the X value directly', function() {
          expect( coordinate.x ).toBeUndefined();
          expect( coordinate._x ).toBeUndefined();
        } );

        it( 'should return the proper X value via an accessor', function() {
          expect( coordinate.getX() ).toEqual( xValue );
        } );

        it( 'should not return the Y value directly', function() {
          expect( coordinate.y ).toBeUndefined();
          expect( coordinate._y ).toBeUndefined();
        } );

        it( 'should return the proper Y value via an accessor', function() {
          expect( coordinate.getY() ).toEqual( yValue );
        } );

        it( 'should return the proper X and Y values as an array', function() {
          expect( coordinate.toArray() ).toEqual( [ 100, 200 ] );
        } );

        it( 'should return the proper X and Y values as a string', function() {
          expect( coordinate.toString() ).toEqual( '100,200' );
        } );

      } );

    } );

  }

);
