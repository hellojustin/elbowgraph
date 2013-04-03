define(

  [ '../src/Graph',
    'SpecHelper' ],

  function( Graph ) {

    describe( 'Graph', function() {

      describe( 'when constructed with jQueryDomElement and data parameters',
        function() {

        var domSnippet,
            data,
            graph;

        beforeEach( function() {
          domSnippet = $( 'body' );
          data       = [ [1,1], [2,2] [3,3] ]
          graph      = new Graph( domSnippet, data );
        } );

        it( 'should create an instance of Graph', function() {
          expect( graph                  ).toBeDefined();
          expect( typeof graph           ).toEqual( 'object' );
          expect( graph instanceof Graph ).toBeTruthy();
        } );

        it( 'should not expose the paper attribute directy', function() {
          expect( graph.paper    ).toBeUndefined();
          expect( graph.getPaper ).toBeUndefined();
        } );

      } );

    } );

  }

);
