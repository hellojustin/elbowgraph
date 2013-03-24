define(

  [ '../../src/data/DataPoint',
    'SpecHelper' ],

  function( DataPoint ) {

    describe( 'DataPoint', function() {

      describe( 'when constructed with an independentValue and a ' +
                'dependentValue.', function() {

        var dataPoint,
            independentValue = 4.5,
            dependentValue   = 6.7333;

        beforeEach( function() {
          dataPoint = new DataPoint( independentValue, dependentValue );
        } );

        it( 'should not expose the dependentValue directly.', function() {
          expect( dataPoint.dependentValue ).toBeUndefined();
        } );

        it( 'should expose the dependentValue via an accessor.', function() {
          expect( dataPoint.getDependentValue() ).toEqual( dependentValue );
        } );

        it( 'should not expose the independentValue directly.', function() {
          expect( dataPoint.independentValue ).toBeUndefined();
        } );

        it( 'should expose the independentValue via an accessor.', function() {
          expect( dataPoint.getIndependentValue() ).toEqual( independentValue );
        } );

      } );

    } );

  }

);
