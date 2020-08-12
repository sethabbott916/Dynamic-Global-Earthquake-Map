// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  console.log(data.features)
  // Once we get a response, send the data.features object to the createFeatures function
  createMarkers(data.features);
});



function createMarkers (earthquakeData) {
    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function createMarker(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }


    function myStyle(feature) {

        return{
        radius: feature.properties.mag * 4,
        fillColor: colorfunction(feature.properties.mag),
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8}
    };
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: createMarker,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, myStyle);
        },
        style: myStyle
    });
    

}



