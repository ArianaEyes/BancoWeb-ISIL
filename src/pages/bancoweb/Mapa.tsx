import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// fix del ícono por defecto que leaflet rompe con vite
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const position: [number, number] = [-12.0464, -77.0428]; // Lima, cambiá según tu ubicación


const Mapa = () => {
  
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: "100%", height: "600px", borderRadius: 16 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>Aquí estamos 📍</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Mapa
