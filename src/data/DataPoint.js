define( 

  [],

  function() {

    function DataPoint( independentValue, dependentValue ) {
      this._independentValue = independentValue;
      this._dependentValue   = dependentValue;
    }

    DataPoint.prototype.getIndependentValue = function() {
      return this._independentValue;
    };

    DataPoint.prototype.getDependentValue = function() {
      return this._dependentValue;
    };

    DataPoint.prototype.render = function() {
      return this;
    };

    return DataPoint;

  }

);
