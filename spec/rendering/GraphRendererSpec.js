define(

  [ '../../src/rendering/GraphRenderer',
    'SpecHelper' ],

  function( GraphRenderer ) {

    describe( 'GraphRenderer', function() {

      describe( 'when constructed with a paper object', function() {
        
        var graphRenderer;

        beforeEach( function() {
          paper         = {};
          graphRenderer = new GraphRenderer( paper );
        } );

        it( 'should create an instance of GraphRenderer', function() {
          expect( graphRenderer ).toBeDefined();
          expect( typeof graphRenderer ).toEqual( 'object' );
          expect( graphRenderer instanceof GraphRenderer ).toBeTruthy();
        } );

        it( 'should not expose paper instance.', function() {
          expect( graphRenderer.paper ).toBeUndefined();
          expect( graphRenderer.getPaper ).toBeUndefined();
        } );

      } );

    } );

  }

);
