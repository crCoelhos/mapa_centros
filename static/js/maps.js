var map1;
function drawMap() {
    
    var mapOptions = {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      fullscreenControl: false 
     }
   
    mapOptions.center = new google.maps.LatLng(-9.953262436082076, -67.86347678527555); // CCET
    map1 = new google.maps.Map(document.getElementById("mapCanvas2"), mapOptions);
    
    
        
 }

