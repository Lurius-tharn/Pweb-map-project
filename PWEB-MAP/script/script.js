function initialize() {
    var map = L.map('map').setView([46.833, 2.333], 5.45);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v9',
		tileSize: 512,
        maxZoom: 19,
		zoomOffset: -1
	}).addTo(map);

	var geojson = L.geoJson(regionsData).addTo(map);

    // L.geoJSON(regionsData, {
    //     style: function(feature) {
    //         color : 'red'
    //     }
    // }).addTo(map);

    function highlightFeature(e) {
        var layer = e.target;
    
        layer.setStyle({
            weight: 5,
            color: 'red',
            dashArray: '',
            fillOpacity: 0.7
        });
    
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    var geojson;
    // ... our listeners
    //geojson = L.geoJson(regionsData);

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight
        });
    }
    
    geojson = L.geoJson(regionsData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

}



