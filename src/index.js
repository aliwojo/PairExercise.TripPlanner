import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZm1nb29kd2luaXYiLCJhIjoiY2todXQ4NHE3MDR6YzJzbW9rZjR4YTdjMSJ9.8oWqsAFsuEDQlLpkW24xmA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10",
});

const marker = document.createElement("div");

marker.style.height = "30px";
marker.style.width = "30px";
marker.style.backgroundColor = "red";
marker.style.borderRadius = "20px";

new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
