// Inicializa o mapa
var map = L.map("map").setView([-23.526977, -46.483503], 13); // Localização: SOS Tubos

// Camada de mapa base (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Ícone verde personalizado
var greenIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Adiciona marcador verde
L.marker([-23.526977, -46.483503], { icon: greenIcon })
  .addTo(map)
  .bindPopup(
    "<strong>SOS Tubos</strong><br>Rua Paratiba, 460<br>Jardim Nordeste<br>São Paulo - SP"
  )
  .openPopup();
