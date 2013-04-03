define(

  [ '../src/Graph',
    '../src/data/DataSeries' ],

  function( Graph, DataSeries ) {
    
     function LineGraph( jQueryDomElement, data ) {
      Graph.call( this, jQueryDomElement, data );

      this._plotArea              = undefined;
      this._plotScale             = undefined;
      this._rendererConfiguration = undefined;
    };

    LineGraph.prototype = Graph.prototype;

    LineGraph.prototype.render = function() {
      return this;
    };

    return LineGraph;

  }

);
