define(

  [ '../src/rendering/GraphRenderer' ],

  function( GraphRenderer ) {

    function LineGraphRenderer( canvas ) {
      GraphRenderer.call( this, canvas );
    }

    return LineGraphRenderer;

  }

)
