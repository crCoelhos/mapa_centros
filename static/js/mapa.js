let map;

function initMap() {
  const directionsRenderer = new google.maps.directionsRenderer();
  const directionsService = new google.maps.directionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -9.953296379836873, lng: -67.86270925573444 },
    zoom: 15.9,
    zoomControl: false,
  });

  directionsRenderer.setMap(map);

}


function tracaExibeRota(directionsService, directionsRenderer){
  const selectedMode = document.getElementById("mode").value;

  directionsService.route({
    inicio: document.getElementById("").value,
    destino: document.getElementById("latitude","longitude").value,

    travelMode: google.maps.TravelMode[selectMode],
  })

  .then((response) => {
    directionsRenderer.setDirections(response);
  })
  .catch((e)=> window.alert("o pedido falhou" + status));
}


