define(

  [],

  function() {

    /* Defining the PlotPoint function that will construct instances of 
       PlotPoint */
    function PlotPoint( xValue, yValue ) {
      this._x = xValue || 0;
      this._y = yValue || 0;
    }

    /* Defining the PlorPoint prototype. These are functions and attributes 
       that all instances of PlotPoint will have. */
    PlotPoint.prototype = {

      getX : function() {
        return this._x;
      },

      getY : function() {
        return this._y;
      },

      toArray : function() {
        return [ this.getX(), this.getY() ];
      },

      toString : function() {
        return this.getX().toString() + ',' + this.getY().toString();
      }

    }

    /* Export the coordinate module as the PlotPoint constructor function. */
    return PlotPoint;

  }

);
