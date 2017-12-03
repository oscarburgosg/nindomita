$(function () {

      function initMap() {

        var location = new google.maps.LatLng(-42.025671, -73.877711);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 1,
			zoomControl: false,
			scaleControl: false,
            //panControl: false,
            //scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

   
        // Let's also add a marker while we're at it
        var image = new google.maps.MarkerImage('',
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

		//Marcar el poligono del Campo	
		var poligono = [
						new google.maps.LatLng(-42.025945, -73.879425),
						new google.maps.LatLng(-42.014675, -73.879387),
						new google.maps.LatLng(-42.014803, -73.877354),
						new google.maps.LatLng(-42.026296, -73.875123)
					   ];

		campo = new google.maps.Polygon({
		  paths: poligono,
		  strokeColor: "#FF0000",
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: "#FF0000",
		  fillOpacity: 0.35
		});

		campo.setMap(map);
		
		//Marcar la ruta desde Chacao al Campo
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;

		var request = {
			origin: 'Transbordador Chacao a Pargua',
			destination:'-42.025671, -73.877711',
			travelMode: google.maps.DirectionsTravelMode['DRIVING'],
			unitSystem: google.maps.DirectionsUnitSystem['METRIC'],
			provideRouteAlternatives: true
			};

		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setMap(map);
				directionsDisplay.setPanel($("#panel_ruta").get(0));
				directionsDisplay.setDirections(response);
			} 
			else {
				//alert("No existen rutas entre ambos puntos");
			}
		});
		
		//Declarar Estilos
        var styles = [

        ] ;

        map.set('styles', styles);

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});