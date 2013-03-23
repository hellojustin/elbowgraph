define(

  [],

  function() {

    var _x = 0,
        _y = 0;
    
    /* Defining the PlotPoint function that will construct instances of 
       PlotPoint */
    PlotPoint = function( xValue, yValue ) {
      _x = xValue || 0;
      _y = yValue || 0;
    }

    /* Defining the PlorPoint prototype. These are functions and attributes 
       that all instances of PlotPoint will have. */
    PlotPoint.prototype = {

      getX : function() {
        return _x;
      },

      getY : function() {
        return _y;
      },

      toArray : function() {
        return [ _x, _y ];
      },

      toString : function() {
        return _x.toString() + ',' + _y.toString();
      }

    }

    /* Export the coordinate module as the PlotPoint constructor function. */
    return PlotPoint;

  }

);
