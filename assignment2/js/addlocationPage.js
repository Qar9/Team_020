// Code for the Add Location page.
var map;
var infowindow;
var tempLat, tempLng, tempName;

function initMap () 
{
    var geocoder = new google.maps.Geocoder ();
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, 
                {
                center: {lat: -37.9120467, lng: 145.1343136},
                zoom: 13
                });
                document.getElementById("address").addEventListener('keyup', function() {
                geocodeAddress(geocoder, map);
                });
                document.getElementById('btn1').addEventListener('click', function () { addLocation();
                });
};

function geocodeAddress(geocoder) {
        var address = document.getElementById("address").value;
             geocoder.geocode( { 'address': address}, function(results, status) {
                 map.setCenter(results[0].geometry.location); 
                 var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title : results[0].formatted_address
                });
                 infowindow = new google.maps.InfoWindow({
                                content: results[0].formatted_address
                 });
                 infowindow.open(map, marker);
                 tempName = JSON.stringify(results[0].formatted_address);            
                 tempLat = JSON.stringify(results[0].geometry.location.lat());
                 tempLng = JSON.stringify(results[0].geometry.location.lng());
                 
                 
               
                                 
                 
            });
};

function addLocation () {
<<<<<<< HEAD
     
     if (document.getElementById('nickname').value !== "") {
         tempName = document.getElementById('nickname').value
     }
    var LCI = new LocationWeatherCache(tempLat, tempLng, tempName);
     LCI.addLocation(tempLat, tempLng, tempName);
=======
    
      if (document.getElementById('nickname').value !== "") { 
                     tempName = document.getElementById('nickname').value
                 };                 
    
     var LCI = new LocationWeatherCache();
     LCI.addLocation(tempLat, tempLng, tempName);
     saveLocations();
>>>>>>> origin/master
                 
};
