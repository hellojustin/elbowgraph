define(

  [ '../../lib/underscore-1.4.4/underscore' ],

  function() {

    function DataSeriesList( dataSeriesArray ) {
      this._dataSeriesArray = dataSeriesArray || [];
    }

    DataSeriesList.prototype.push = function( dataSeries ) {
      this._dataSeriesArray.push( dataSeries );
      return this;
    }

    DataSeriesList.prototype.pop = function() {
      return this._dataSeriesArray.pop();
    }

    DataSeriesList.prototype.getMaxIndependentVariable = function() {
      return _.max( this._dataSeriesArray, function( dataSeries ) {
               return dataSeries.getMaxIndependentVariable();
             } );
    }

    DataSeriesList.prototype.getMinIndependentVariable = function() {
      return _.min( this._dataSeriesArray, function( dataSeries ) {
               return dataSeries.getMinIndependentVariable();
             }
    }

    DataSeriesList.prototype.getMaxDependentVariable = function() {
      return _.max( this._dataSeriesArray, function( dataSeries ) {
               return dataSeries.getMaxDependentVariable();
             }
    }

    DataSeriesList.prototype.getMinDependentVariable = function() {
      return _.min( this._dataSeriesArray, function( dataSeries ) {
               return dataSeries.getMinDependentVariable();
             }
    }

  }

);
