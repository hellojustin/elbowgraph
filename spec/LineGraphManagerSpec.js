define( 

  [ '../src/LineGraphManager',
    '../src/data/DataSeries',
    'SpecHelper' ],

  function( LineGraphManager, DataSeries ) {
    
    describe( 'LineGraphManager', function() {
      
      describe( 'when constructed without any parameters', function() {

        it( 'should throw an execption.', function() {
          expect( function() { new LineGraphManager(); } )
            .toThrow( new Error( "Expected jQueryDomElement to be passed as " +
                                 "parameter to LineGraphManager." ) );
        } );

      } );

      describe( 'when constructed with a jQueryDomElement as a container elem',
        function() {

        var domSnippet,
            lineGraphManager;

        beforeEach( function() {
          domSnippet = $( '<div></div>' );
          lineGraphManager = new LineGraphManager( domSnippet );
        } );

        it( 'should create an instance of LineGraphManager', function() {
          expect( lineGraphManager ).toBeDefined();
          expect( typeof lineGraphManager ).toEqual( 'object' );
        } );

        it( 'should not expose the container element directy', function() {
          expect( lineGraphManager.containerElement ).toBeUndefined();
        } );

        it( 'should expose the container element via an accessor', function(){
          expect( lineGraphManager.getContainerElement() )
            .toEqual( domSnippet );
        } );

        describe( 'and addDataSeries() is invoked', function() {

          var dataSeriesListLength;

          beforeEach( function() {
            dataSeriesListLength = lineGraphManager._dataSeriesList.length;
          } );

          describe( 'with no parameter', function() {

            beforeEach( function() {
              lineGraphManager.addDataSeries();
            } );

            it( 'should not add anything to the internal dataSeriesList',
              function() {
              expect( lineGraphManager._dataSeriesList.length )
                .toEqual( dataSeriesListLength );
            } );

          } );

          describe( 'with an invalid parameter', function() {
            
            beforeEach( function() {
              lineGraphManager.addDataSeries( { a : 1, b : 2, c : 3 } );
            } );

            it( 'should not add anything to the internal dataSeriesList',
              function() {
              expect( lineGraphManager._dataSeriesList.length )
                .toEqual( dataSeriesListLength );
            } );

          } );

          describe( 'with a valid DataSeries object', function() {
           
            var dataSeries;

            beforeEach( function() {
              dataSeries = new DataSeries( [ [ 0,5 ], [ 1,4 ], [ 2,3 ] ] );
              lineGraphManager.addDataSeries( dataSeries );
            } )

            it( 'should add the dataSeries instance to _dataSeriesList', 
              function() {
              expect( lineGraphManager._dataSeriesList.length )
                .toEqual( dataSeriesListLength + 1 );
              expect( lineGraphManager._dataSeriesList.pop() )
                .toEqual( dataSeries );
            } );

          } );

        } );

      } );

    } );

  }

);
