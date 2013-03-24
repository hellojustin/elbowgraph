define(

  [ '../../src/data/DataSeries',
    '../../src/data/DataPoint',
    'SpecHelper' ],

  function( DataSeries, DataPoint ) {
    
    describe( 'DataSeries', function() {

      describe( 'when instantiated from an Array of DataPoints', function() {
        
        var dataSeries,
            dataPoint1 = new DataPoint( 1.5, 2.5 ),
            dataPoint2 = new DataPoint( 2,   3.5 ),
            dataPoint3 = new DataPoint( 2.5, 7   ),
            dataPoints = [ dataPoint1, dataPoint2, dataPoint3 ];

        beforeEach( function() {
          dataSeries = new DataSeries( dataPoints, 'Test Series' );
        } );

        it( 'should exist as an instance of DataSeries', function() {
          expect( dataSeries ).toBeDefined();
          expect( typeof dataSeries ).toEqual( 'object' );
          expect( dataSeries instanceof DataSeries ).toBeTruthy();
        } );

        it( 'should expose the dataSeries name via an accessor.', function() {
          expect( dataSeries.getName() ).toEqual( 'Test Series' );
        } );

        it( 'should expose the maxDependentValue.', function() {
          expect( dataSeries.getMaxDependentValue() ).toEqual( 7 );
        } );

        it( 'should expose the minDependentValue.', function() {
          expect( dataSeries.getMinDependentValue() ).toEqual( 2.5 );
        } );

        it( 'should expose the maxIndependentValue.', function() {
          expect( dataSeries.getMaxIndependentValue() ).toEqual( 2.5 );
        } );

        it( 'should expose the minIndependentValue.', function() {
          expect( dataSeries.getMinIndependentValue() ).toEqual( 1.5 );
        } );

      } );

      describe( 'when instantiated from an Array of Arrays, whose first ' + 
                'element is the independentValue, and second element is ' +
                'the dependentValue for each data point.', function() {

        var dataSeries,
            data = [ [ 1.5, 2.5 ], [ 2, 3.5 ], [ 2.5, 7 ] ];

        beforeEach( function() {
          dataSeries = new DataSeries( data, 'Test Series' );
        } );

        it( 'should exist as an instance of DataSeries', function() {
          expect( dataSeries ).toBeDefined();
          expect( typeof dataSeries ).toEqual( 'object' );
          expect( dataSeries instanceof DataSeries ).toBeTruthy();
        } );

        it( 'should expose the dataSeries name via an accessor.', function() {
          expect( dataSeries.getName() ).toEqual( 'Test Series' );
        } );

        it( 'should expose the maxDependentValue.', function() {
          expect( dataSeries.getMaxDependentValue() ).toEqual( 7 );
        } );

        it( 'should expose the minDependentValue.', function() {
          expect( dataSeries.getMinDependentValue() ).toEqual( 2.5 );
        } );

        it( 'should expose the maxIndependentValue.', function() {
          expect( dataSeries.getMaxIndependentValue() ).toEqual( 2.5 );
        } );

        it( 'should expose the minIndependentValue.', function() {
          expect( dataSeries.getMinIndependentValue() ).toEqual( 1.5 );
        } );

      } );

    } );

  }

);
