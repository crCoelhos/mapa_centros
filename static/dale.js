function initMap(){
    const directionsService = new google.maps.DirectionService();
    const directionsService = new google.maps.DirectionRenderer({
        draggable: false
    });
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: { lat: 41.85, lng: -87.65 },
    });

    directionRenderer.setMap(map);

    directionsService.route({
        origin: 'Toronto, Canadá',
        destination: 'Montereal, Canadá',
        waypoints: [
            {location: 'Ottawa, Canadá', stopover: true}
        ],
        travelMode: google.maps.TravelMode.WALKING
    }).then(response =>{
        console.log({response});
        directionRenderer.setDirections(response);
    
    
    
    
    
    }).catch(err => {
        console.log({err});
    });

    




    
    // directionsRenderer.addListener('directions_changed', () => {
    //     console.log(directionsRenderer)
    // })

}






function rendeerPolyline(patch, map){
    new google.maps.Polyline({
        path: path,
        map: map

    });
}