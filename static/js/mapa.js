// function initMap() {
//   var options = {
//   zoom: 15.9,
//   center: { lat: -9.953296379836873, lng: -67.86270925573444 },
//   }
//   var map = new google.maps.Map(document.getElementById("map"), options);
// }

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -9.953296379836873, lng: -67.86270925573444 },
    zoom: 15.9,
  });
}