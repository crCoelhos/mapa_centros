function initMap(){
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 16.3,
        center: { lat: -9.953317514546832, lng:-67.86271998458022 },
    });

    directionsRenderer.setMap(map)
    calcularRota(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calcularRota(directionsService, directionsRenderer);
    });
    
}

function calcularRota(directionsService, directionsRenderer){
    const selectedMode = document.getElementById("mode").value;
    
    directionsService
    .route({
        origin: { lat: -9.953317514546832, lng:-67.86271998458022 },
        destination: document.getElementById("to").value,

        travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
        directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("essa requisição falhou."));

}



    const saida_rota = document.getElementById("to"); 

function rodar_direcao() {
    saida_rota.value = document.getElementById("destino2").value; 
  
    console.log(saida_rota)
}