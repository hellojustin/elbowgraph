define(

  [],

  function() {

    var _x = 0,
        _y = 0;
    
    /* Defining the Coordinate function that will construct instances of 
       Coordinate */
    Coordinate = function( xValue, yValue ) {
      _x = xValue || 0;
      _y = yValue || 0;
    }

    /* Defining the Coordinate prototype. These are functions and attributes 
       that all instances of Coordinate will have. */
    Coordinate.prototype = {

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

    /* Export the coordinate module as the Coordinate constructor function. */
    return Coordinate;

  }

);
