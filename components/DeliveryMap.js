// components/DeliveryMap.js
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

export default function DeliveryMap() {
  const origin = [37.7749, -122.4194]; // Origin: Example coordinates (San Francisco)
  const destination = [37.8044, -122.2712]; // Destination: Example coordinates (Oakland)
  const currentLocation = [37.7833, -122.4167]; // Current location

  const routePoints = [origin, currentLocation, destination];

  // Helper to create an SVG string from a React component
  const createSVGIcon = (SVGPath) => {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">${SVGPath}</svg>`;
    return L.divIcon({
      html: svgString,
      className: "",
      iconSize: [25, 25],
      iconAnchor: [12, 12],
    });
  };

  // SVG strings from Heroicons for each location
  const originIcon = createSVGIcon(
    '<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M9 21V9h6v12"/>'
  );
  const currentLocationIcon = createSVGIcon(
    '<path stroke-linecap="round" stroke-linejoin="round" d="M12 11c-1.38 0-2.5 1.12-2.5 2.5S10.62 16 12 16s2.5-1.12 2.5-2.5S13.38 11 12 11z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 00-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>'
  );
  const destinationIcon = createSVGIcon(
    '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 19.5h7.5M8.25 16.5h7.5m-6.75-6.75L12 6l3.75 3.75M12 6v10.5"/>'
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">On the way</h2>
      <MapContainer
        center={origin}
        zoom={12}
        scrollWheelZoom={false}
        className="h-[230px] w-[600px]" // Set map size to 200x200
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {/* Origin marker */}
        <Marker position={origin} icon={originIcon} />
        {/* Current location marker */}
        <Marker position={currentLocation} icon={currentLocationIcon} />
        {/* Destination marker */}
        <Marker position={destination} icon={destinationIcon} />
        {/* Route polyline */}
        <Polyline positions={routePoints} color="blue" />
      </MapContainer>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-medium">Category</p>
          <p>Electronic</p>
        </div>
        <div>
          <p className="font-medium">Distance</p>
          <p>60.41 km</p>
        </div>
        <div>
          <p className="font-medium">Estimation</p>
          <p>1d 16h</p>
        </div>
        <div>
          <p className="font-medium">Weight</p>
          <p>25kg</p>
        </div>
        <div>
          <p className="font-medium">Fee</p>
          <p>$1,050</p>
        </div>
      </div>
    </div>
  );
}
