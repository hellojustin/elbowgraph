define(

  [],

  function() {

    function AbstractGraphManager( jQueryDomElement ) {
      if ( jQueryDomElement === undefined ) {
        throw new Error( "Expected jQueryDomElement to be passed as parameter " +
                         "to AbstractGraphManager." );
      }

      this._containerElement = jQueryDomElement;
    }

    AbstractGraphManager.prototype = {

      getContainerElement : function() {
        return this._containerElement;
      }

    }

    return AbstractGraphManager;

  }

);
