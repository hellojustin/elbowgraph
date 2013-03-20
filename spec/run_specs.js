/* Requirejs configuration */

require.config( {
  urlArgs: "bust=v2"  
} );

/* Defining a module that will execute our Jasmine specs and report their output
   as HTML. */

define( 

  /* The SpecRunner module depends on each of our Jasmine spec modules, so we 
     need to list each of them here. */

  [ 'PlayerSpec' ], 

  /* Here we begin our definition of the SpecRunner module. */

  function() {

    var jasmineEnv = jasmine.getEnv();
    var reporter   = new jasmine.HtmlReporter();
    
    jasmineEnv.addReporter( reporter );

    jasmineEnv.updateInterval = 1000;
    jasmineEnv.specFilter     = function( spec ) { 
      return reporter.specFilter( spec ); 
    };

    jasmineEnv.execute();

  }

);
