import mapboxgl from "mapbox-gl";
import createMarker from "./marker";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZm1nb29kd2luaXYiLCJhIjoiY2todXQ4NHE3MDR6YzJzbW9rZjR4YTdjMSJ9.8oWqsAFsuEDQlLpkW24xmA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10",
});

const marker = createMarker("activity", [-74.009151, 40.705086]);

marker.addTo(map);
