define(

  [ '../src/data/DataSeries',
    'raphael' ],

  function( DataSeries, Raphael ) {

    function Graph( jQueryDomElement, data ) {
      this._paper          = Raphael( jQueryDomElement );
      this._dataSeriesList = [];
    }

    Graph.prototype.addDataSeries = function( data ) {
      this._dataSeriesList.push( new DataSeries( data ) );
      return this;
    }

    return Graph;

  }

);
