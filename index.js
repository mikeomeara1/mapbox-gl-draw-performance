mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZW9tZWFyYTEiLCJhIjoiY2ppZjUybTl0MGtpbTNybnhmaW5lODF0YSJ9.Z3yxLGnip7kSCxPTxZ1oKA';

var map = new mapboxgl.Map({
  container: document.getElementById("map"),
  style: 'mapbox://styles/mapbox/streets-v8'
});



map.on('load', function() {
  // ALL YOUR APPLICATION CODE
  var Draw = new MapboxDraw();

map.addControl(Draw, 'top-left');
});

map.on("draw.modechange", function(e){ console.log(e)});