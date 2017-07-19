function compare(actual, expected) {
  var player = actual;

  return {pass: player.currentlyPlayingSong === expected && player.isPlaying};
}

beforeEach(function() {
  jasmine.addMatchers({
    toBePlaying: function() {
      return  {
        compare: compare
      };
    }
  });
});
