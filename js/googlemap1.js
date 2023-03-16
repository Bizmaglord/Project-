// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', googlemapinit);

function googlemapinit() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(48.13748473, 11.58006564), // Munchen

        // How you would like to style the map.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ededed"},{"visibility":"on"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="google_map" seen below in the <body>
    var mapElement = document.getElementById('google_map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
     var gimage = 'images/marker.png';

     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(48.13748473, 11.58006564),
         map: map,
         icon: gimage,
        title: 'Google Map Title'
     });
}
