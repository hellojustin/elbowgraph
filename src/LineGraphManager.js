define(

  [ '../src/AbstractGraphManager',
    '../src/data/DataSeries' ],

  function( AbstractGraphManager, DataSeries ) {
    
     function LineGraphManager( jQueryDomElement ) {
      if ( typeof jQueryDomElement === 'undefined' ) {
        throw new Error( "Expected jQueryDomElement to be passed as parameter " +
                         "to LineGraphManager." );
      }

      AbstractGraphManager.call( this, jQueryDomElement );

      this._dataSeriesList        = [];
      this._plotArea              = undefined;
      this._plotScale             = undefined;
      this._rendererConfiguration = undefined;
    };

    LineGraphManager.prototype = AbstractGraphManager.prototype;

    LineGraphManager.prototype.addDataSeries = function( dataSeries ) {
      if ( !( dataSeries instanceof DataSeries ) ) { return this };

      this._dataSeriesList.push( dataSeries );
      return this;
    };

    LineGraphManager.prototype.render = function() {
      return this;
    };
 
    LineGraphManager.prototype.setRendererConfiguration = function() {
    };

    LineGraphManager.prototype.undo = function() {
      return this;
    };

    return LineGraphManager;

  }

);
