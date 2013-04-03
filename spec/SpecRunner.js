/* Requirejs configuration */

require.config( {

  urlArgs : "bust=v2",

  paths   : {
    'eve'          : '../lib/raphaeljs/eve',
    'raphael-core' : '../lib/raphaeljs/raphael.core',
    'raphael-svg'  : '../lib/raphaeljs/raphael.svg',
    'raphael-vml'  : '../lib/raphaeljs/raphael.vml',
    'raphael'      : '../lib/raphaeljs/raphael.amd',
  },

  shim    : {
    'raphael' : {
      exports : 'Raphael'
    }
  }  

} );

/* Defining a module that will execute our Jasmine specs and report their output
   as HTML. */

define( 

  /* The SpecRunner module depends on each of our Jasmine spec modules, so we 
     need to list each of them here. */

  [ 'GraphSpec',
    //'LineGraphSpec',
    'data/DataPointSpec',
    'data/DataSeriesSpec',
    'plotting/PlotPointSpec',
    'rendering/GraphRendererSpec' ], 

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
