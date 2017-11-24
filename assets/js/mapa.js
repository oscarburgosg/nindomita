$(function () {

    function initMap() {

        var location = new google.maps.LatLng(-42.05, -74.0333);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 14,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

   
        // Let's also add a marker while we're at it
        var image = new google.maps.MarkerImage('images/marker.png',
            new google.maps.Size(59, 65),
            new google.maps.Point(0, 0),
            new google.maps.Point(24, 42)
        );

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image
        });

        var contentString = '<div class="info-window">' +
                '<h3>Naturaleza Indomita</h3>' +
                '<div class="info-content">' +
                '<p>Sociedad inmobiliaria con presencia en Chiloé y el sur de Chile. Consulta acerca de inversión en nuestros proyectos.</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var styles = [

        ]
        ;

        map.set('styles', styles);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});