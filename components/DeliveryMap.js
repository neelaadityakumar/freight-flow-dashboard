// components/DeliveryMap.js
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

export default function DeliveryMap() {
  const origin = [37.7749, -122.4194]; // Origin: Example coordinates (San Francisco)
  const destination = [37.8044, -122.2712]; // Destination: Example coordinates (Oakland)
  const currentLocation = [37.7833, -122.4167]; // Current location

  // Helper to create a green circle icon for the origin
  const originIcon = L.divIcon({
    className: "origin-icon",
    html: `
      <div style="
        background-color: green;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        color: white;
        font-weight: bold;
        font-size: 14px;">
        O
      </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  // Helper to create a blue checkpoint icon for the destination
  const destinationIcon = L.divIcon({
    className: "destination-icon",
    html: `
      <div style="
        background-color: blue;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        color: white;
        font-weight: bold;
        font-size: 14px;">
        D
      </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  // Helper to create a chevron icon for the current location
  const chevronIcon = L.divIcon({
    className: "current-location-icon",
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <!-- Outer blue circle -->
        <circle cx="15" cy="15" r="15" fill="blue" />
        <!-- Inner triangle -->
        <polygon points="15,7 22,20 8,20" fill="white" />
      </svg>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
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
        <Marker position={currentLocation} icon={chevronIcon} />
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
