// components/DeliveryMap.js
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

export default function DeliveryMap() {
  const origin = [37.7749, -122.4194]; // Origin: Example coordinates (San Francisco)
  const destination = [37.8044, -122.2712]; // Destination: Example coordinates (Oakland)
  const currentLocation = [37.7833, -122.4167]; // Current location

  // Helper to create a green circle icon for the origin
  const originIcon = L.icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  // Helper to create a google map destination icon for the destination
  const destinationIcon = L.icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  // Helper to create a google map van icon for the current location
  const vanIcon = L.icon({
    iconUrl: "https://maps.google.com/mapfiles/kml/shapes/truck.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">On the way</h2>
      <MapContainer
        center={currentLocation}
        zoom={12}
        scrollWheelZoom={true}
        className="h-[230px] w-[50%s]" // Set map size
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution="© OpenStreetMap contributors"
        />
        {/* Origin marker */}
        <Marker position={origin} icon={originIcon} />
        {/* Current location marker */}
        <Marker position={currentLocation} icon={vanIcon} />
        {/* Destination marker */}
        <Marker position={destination} icon={destinationIcon} />

        {/* Route polyline */}
        <Polyline positions={[origin, currentLocation]} color="green" />
        <Polyline positions={[currentLocation, destination]} color="blue" />
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
