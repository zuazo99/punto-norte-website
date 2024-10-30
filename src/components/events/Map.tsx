import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  location: { lat: number; lng: number; city?: string; address?: string };
}

function Map({ location }: MapProps) {
  const { lat, lng } = location;
  useEffect(() => {
    const micIcon = L.icon({
      iconUrl: "/microphone-marker.png",

      iconSize: [80, 80], // size of the icon
      iconAnchor: [40, 80], // point of the icon which will correspond to marker's location
      // popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    const map = L.map("map", { zoomControl: false }).setView([lat, lng], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng], { icon: micIcon }).addTo(map);
  }, []);

  return (
    <div id="map" className="h-full w-full overflow-hidden">
      {(location.address || location.city) && (
        <header className="absolute z-[450] h-full w-full bg-gradient-to-b from-secondary/80 via-transparent to-transparent p-2 font-brush text-white">
          <h1 className="drop-shadow-lg text-4xl">{location?.city}</h1>
          <h2 className="text-primary drop-shadow-lg text-xl">
            {location?.address}
          </h2>
        </header>
      )}
    </div>
  );
}

export default Map;
