$( document).ready ( 
    function (){
        var country;
        Window.onload = initialize();
        var q =  document.getElementById('game');
        $("#btn_jouer").click(function(e){
            jouer();        
         });
        var info = L.Control();
        

        function initialize() {
            
            var map = L.map('map').setView([46.833, 2.333], 5.45);
            map.createPane('nom');
            map.getPane('nom').style.zIndex = 650;
            map.getPane('nom').style.pointerEvents = 'none';

            

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v9',
                tileSize: 512,
                maxZoom: 19,
                zoomOffset: -1
            }).addTo(map);

            var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
            attribution: '©OpenStreetMap, ©CartoDB',
            pane: 'nom'
            }).addTo(map);


            var geojson = L.geoJson(regionsData).addTo(map);
            
            // geojson.eachLayer(function (layer) {
            //     layer.bindPopup(layer.feature.properties.nom);
            // });

            map.fitBounds(geojson.getBounds());

                        
            // map.setView({ lat: 47.040182144806664, lng: 9.667968750000002 }, 4);
    

            let geoJSONLayer = L.geoJson(regionsData, { 
                style: style,
                onEachFeature: onEachFeature
            }).addTo(map);

    
            function style(feature) {
                return {
                    //fillColor: getColor(feature.properties.population),
                    weight: 2,
                    opacity: 1,
                    //color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.2
                };
            }

            
    
            function onEachFeature(feature, layer) {
                layer.on({
                    mouseover: highlightFeature,
                    mouseout: resetHighlight,
                    onclick : layer.bindPopup(layer.feature.properties.nom)
                });
            }

            function highlightFeature(e) {
                var layer = e.target;
            
                layer.setStyle({
                    weight: 5,
                    color: '#666',
                    dashArray: '',
                    fillOpacity: 0.7
                });
            
                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    layer.bringToFront(); // Permet de garantir que le pays est au-dessus des autres couches de données
                }
            
                info.update(layer.feature.properties);
            }

            
            
            function resetHighlight(e) {
                geoJSONLayer.resetStyle(e.target);
                info.update();
            }      
            
            //a utiliser pour donner indice sur la région 
            // var circle = L.circle([40.833, 0.333], {
            //     color: 'red',
            //     fillColor: '#f03',
            //     fillOpacity: 0.5,
            //     radius: 200000
            // }).addTo(map);
            
        }
     
        
        function jouer(){
            //.....
            //Générer une région au hasard et proposer au joueur    
            var ajaxReq = $.post(
                    'routes/index.php', // Un script PHP que l'on va créer juste après
                    {
                        data:"getCountry"
                    },
                 );
                 ajaxReq.success(function (data, status, jqXhr) {
                    $('p').html(data);
                })
                            
                ajaxReq.error(function (jqXhr, textStatus, errorMessage) {
                    $('p').html('Error: ' + errorMessage);
                })
           

        }


        function goodRegion(){
            //fonction qui va etre appellé dans jouer afin de savoir si
            //la région choisie est la bonne ou pas

        }

            
            

            

    }
        

    
)
    





