define( [ '../lib/jasmine-1.3.1/jasmine-html' ], function() {
  beforeEach(function() {
    this.addMatchers({
      toBePlaying: function(expectedSong) {
        var player = this.actual;
        return player.currentlyPlayingSong === expectedSong && 
              player.isPlaying;
      }
    });
  });
});
