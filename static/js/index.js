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
    .catch((e) => window.alert("Clique nas coordenadas do centro desejado e selecione o modo de direção")); 

}

//tentando fazer a rota ser traçada insta ao clicar no botão, sem a necessidade de clicar no modo novamente
// const atualizar_modo = document.getElementById("andando");
//função para jogar as coordenadas geradas no box de input de direção
const saida_rota = document.getElementById("to"); 

function rodar_direcao1() {
    saida_rota.value = document.getElementById("destino1").value; 
    // atualizar_modo.value = document.getElementById("andando").value;
}
function rodar_direcao2() {
    saida_rota.value = document.getElementById("destino2").value; 
}
function rodar_direcao3() {
    saida_rota.value = document.getElementById("destino3").value; 
}
function rodar_direcao4() {
    saida_rota.value = document.getElementById("destino4").value; 
}
//solução gambiarra pro problema que eu não consegui resolver por completo:
// contar quantidade de centros atuais e liberar escopo para inserção ou resolver o caso do recolhimento de valor por um elemento gerado com django
// function rodar_direcao5() {
//     saida_rota.value = document.getElementById("destino4").value; 
  
//     console.log(saida_rota)
// }
// function rodar_direcao6() {
//     saida_rota.value = document.getElementById("destino4").value; 
  
//     console.log(saida_rota)
// }

// function rodar_direcao7() {
//     saida_rota.value = document.getElementById("destino4").value; 
  
//     console.log(saida_rota)
// }
// function rodar_direcao8() {
//     saida_rota.value = document.getElementById("destino4").value; 
  
//     console.log(saida_rota)
// }
