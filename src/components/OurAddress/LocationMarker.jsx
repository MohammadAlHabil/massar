import { useMapEvents, Popup, Marker } from "react-leaflet";
import LeafletIcon from "leaflet";
import markerImage from "../../assets/images/marker.png";

export default function LocationMarker({ position }) {
  const markerIcon = new LeafletIcon.Icon({
    iconUrl: markerImage,
    iconSize: [38, 50],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  const map = useMapEvents({});
  map.flyTo(position, map.getZoom());

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>{`${position[0]} : ${position[1]}`}</Popup>
    </Marker>
  );
}
