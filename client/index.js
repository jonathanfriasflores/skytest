function myMap() {
var map = new google.maps.Map(document.getElementById("map"), {
	center: new google.maps.LatLng(25, -100),
    zoom: 15}
);
var infoWindow = new google.maps.InfoWindow({map: map});
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    infoWindow.setPosition(pos);
    infoWindow.setContent('Ubicaci&oacute;n actual');
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  infoWindow.hide();
  handleLocationError(false, infoWindow, map.getCenter());
}
document.getElementById("findBtn").addEventListener("click", function(event) {
   findUsersClick(map)
});
}

function findUsersClick(map){
	var marker = new google.maps.Marker({
          position: new google.maps.LatLng(25.6775522, -100.354296),
          title: 'Hello World!'
        });
	marker.setMap(map);
}