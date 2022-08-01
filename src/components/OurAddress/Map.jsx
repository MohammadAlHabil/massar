import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";
import LocationMarker from "./LocationMarker";
import "./style.css";

export default function Map({ position }) {
  const mapRef = useRef();
  const ZOOM_LEVEL = 13;

  return (
    <div className="map-wrapper">
      <MapContainer
        center={position}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className="map-container">
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <LocationMarker position={position} />
      </MapContainer>
    </div>
  );
}
