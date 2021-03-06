//inicializador do canvas pra desenhar o mapa
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
//traçar a rota
function calcularRota(directionsService, directionsRenderer){
    const selectedMode = document.getElementById("mode").value;
    
    directionsService
    .route({
        origin: { lat: -9.953317514546832, lng:-67.86271998458022 }, //Lat, Lon do ponto inicial
        destination: document.getElementById("to").value,

        travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
        directionsRenderer.setDirections(response);
    })

    //exceção
    .catch((e) => window.alert("clique no botão do centro e selecione o modo de direção.")); 

}


//função para jogar as coordenadas geradas no box de input de direção
const saida_rota = document.getElementById("to");
const refrescar = document.getElementById("a_pe")

function rodar_direcao() {
    saida_rota.value = document.getElementById("destino{{item.id}}").value;
    refrescar.value = document.getElementById("a_pe").value;
}