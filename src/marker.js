import mapboxgl from "mapbox-gl";

const images = {
  activities: "url(http://i.imgur.com/WbMOfMl.png)",
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
};

function createMarker(type, location) {
  const marker = document.createElement("div");
  marker.style.height = "39px";
  marker.style.width = "32px";
  if (type === "hotel") {
    marker.style.backgroundImage = images.hotels;
  } else if (type === "restaurant") {
    marker.style.backgroundImage = images.restaurants;
  } else if (type === "activity") {
    marker.style.backgroundImage = images.activities;
  }

  return new mapboxgl.Marker(marker).setLngLat(location);
}

export default createMarker;
