define(

  [ '../data/DataPoint',
    '../../lib/underscore-1.4.4/underscore' ],

  function( DataPoint ) {

    function DataSeries( data, name ) {

      if ( typeof data === 'undefined' ) {
        throw new Error( 'Expected data to be defined.' );
      }

      this._name       = name || '';
      this._dataPoints = [];
      
      _.each( data, function( value ) {
        if( isDataPoint( value ) ) {
          this.addDataPoint( value );
        } else if( isArrayOfNumbers( value ) ) {
          this.addDataPoint( new DataPoint( value[0], value[1] ) );
        }
      }, this );

    }

    DataSeries.prototype.addDataPoint = function( dataPoint ) {
      this._dataPoints.push( dataPoint );
      return this;
    };

    DataSeries.prototype.getMaxDependentValue = function() {
      return _.last( sortByDependentValue( this._dataPoints ) )
                .getDependentValue();
    };

    DataSeries.prototype.getMinDependentValue = function() {
      return _.first( sortByDependentValue( this._dataPoints ) )
                .getDependentValue();
    };

    DataSeries.prototype.getMaxIndependentValue = function() {
      return _.last( sortByIndependentValue( this._dataPoints ) )
                .getIndependentValue();
    };

    DataSeries.prototype.getMinIndependentValue = function() {
      return _.first( sortByIndependentValue( this._dataPoints ) )
                .getIndependentValue();
    };

    DataSeries.prototype.getName = function() {
      return this._name;
    }

    DataSeries.prototype.render = function() {
      return this;
    };

    /* Begin private functions */

    function isDataPoint( obj ) {
      return ( typeof obj.getDependentValue   === 'function' ) &&
             ( typeof obj.getIndependentValue === 'function' );
    }

    function isArrayOfNumbers( obj ) {
      return ( obj instanceof Array       ) && 
             ( typeof obj[0] === 'number' ) &&
             ( typeof obj[1] === 'number' )
    }

    function sortByDependentValue( dataPoints ) {
      return _.sortBy( dataPoints, function( p ) { 
               return p.getDependentValue();
             } );
    }

    function sortByIndependentValue( dataPoints ) {
      return _.sortBy( dataPoints, function( p ) {
               return p.getIndependentValue();
             } );
    }

    /* End private functions */

    return DataSeries;

  }

);
