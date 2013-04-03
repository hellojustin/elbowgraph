define(

  [ '../src/AbstractGraphManager',
    'SpecHelper' ],

  function( AbstractGraphManager ) {

    describe( 'AbstractGraphManager', function() {

      describe( 'when constructed without any parameters', function() {

        it( 'should throw an exception.', function() {
          expect( function() { new AbstractGraphManager(); } )
            .toThrow( new Error( "Expected jQueryDomElement to be passed as " +
                                 "parameter to AbstractGraphManager." ) );
        } );

      } );

      describe( 'when constructed with a jQueryDomElement as a container elem',
        function() {

          var domSnippet,
              abstractGraphManager;

          beforeEach( function() {
            domSnippet = $( '<div></div>' );
            abstractGraphManager = new AbstractGraphManager( domSnippet );
          } );

          it( 'should create an instance of AbstractGraphManager', function() {
            expect( abstractGraphManager ).toBeDefined();
            expect( typeof abstractGraphManager ).toEqual( 'object' );
          } );

          it( 'should not expose the container element directy', function() {
            expect( abstractGraphManager.containerElement ).toBeUndefined();
          } );

          it( 'should expose the container element via an accessor', function(){
            expect( abstractGraphManager.getContainerElement() )
              .toEqual( domSnippet );
          } );

      } );

    } );

  }

);
