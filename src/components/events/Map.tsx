import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  location: { lat: number; lng: number; city?: string; address?: string };
  title: string;
}

function Map({ location, title }: MapProps) {
  const { lat, lng } = location;
  
  useEffect(() => {
    var map = L.map("map", { zoomControl: false }).setView([lat, lng], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng]).addTo(map).bindPopup(title);
  }, []);

  return (
    <div id="map" className="h-full w-full overflow-hidden">
      {(location.address || location.city) && (
        <header className="absolute z-[450] h-full w-full bg-gradient-to-b from-teal-500/70 via-transparent to-transparent p-2 font-brush text-white">
          <h1 className="font-bold text-4xl drop-shadow-lg">{location?.city}</h1>
          <h2 className="text-primary text-xl drop-shadow-lg">{location?.address}</h2>
        </header>
      )}
    </div>
  );
}

export default Map;
