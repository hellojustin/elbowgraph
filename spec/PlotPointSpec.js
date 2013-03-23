define(

  [ '../src/PlotPoint',
    'SpecHelper' ],

  function( PlotPoint ) {

    describe( 'PlotPoint', function() {

      describe( 'when instantiated with no parameters',  function() {
        
        beforeEach( function() {
          plotPoint = new PlotPoint();
        } );

        it( 'should exist as an object', function() {
          expect( plotPoint ).toBeDefined();
          expect( typeof plotPoint ).toEqual( 'object');
        } );

        it( 'should return the default X value via an accessor', function() {
          expect( plotPoint.getX() ).toEqual( 0 );
        } );

        it( 'should return the default Y value via an accessor', function() {
          expect( plotPoint.getY() ).toEqual( 0 );
        } );

        it( 'should return the default X and Y values as an array', function() {
          expect( plotPoint.toArray() ).toEqual( [ 0, 0 ] );
        } );

        it( 'should return the default X and Y values as a string', function() {
          expect( plotPoint.toString() ).toEqual( '0,0' );
        } );

      } );

      describe( 'when instantiated with X and Y values', function() {

        var plotPoint,
            xValue = 100,
            yValue = 200;

        beforeEach( function() {
          plotPoint = new PlotPoint( xValue, yValue );
        } );

        it( 'should exist as an object', function() {
          expect( plotPoint ).toBeDefined();
          expect( typeof plotPoint ).toEqual( 'object' );
        } );

        it( 'should not return the X value directly', function() {
          expect( plotPoint.x ).toBeUndefined();
          expect( plotPoint._x ).toBeUndefined();
        } );

        it( 'should return the proper X value via an accessor', function() {
          expect( plotPoint.getX() ).toEqual( xValue );
        } );

        it( 'should not return the Y value directly', function() {
          expect( plotPoint.y ).toBeUndefined();
          expect( plotPoint._y ).toBeUndefined();
        } );

        it( 'should return the proper Y value via an accessor', function() {
          expect( plotPoint.getY() ).toEqual( yValue );
        } );

        it( 'should return the proper X and Y values as an array', function() {
          expect( plotPoint.toArray() ).toEqual( [ 100, 200 ] );
        } );

        it( 'should return the proper X and Y values as a string', function() {
          expect( plotPoint.toString() ).toEqual( '100,200' );
        } );

      } );

    } );

  }

);
