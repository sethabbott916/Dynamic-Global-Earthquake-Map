// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  console.log(data.features)
  // Once we get a response, send the data.features object to the createFeatures function
  createMarkers(data.features);
});
