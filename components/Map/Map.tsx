import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { ISectionMap } from "../../types/generated/contentful";
import markerIcon from "./icon";

import "leaflet/dist/leaflet.css";

type MapProps = {
  content: ISectionMap;
};

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function Map({ content }: MapProps) {
  const { latitude, longitude, markerPopupText } = content.fields;
  const coordinates: LatLngTuple = [latitude, longitude];

  return (
    <MapContainer
      className="fixed w-full mt-24 h-72 sm:h-96 md:h-[30rem]"
      style={{ zIndex: 0 }}
      center={coordinates}
      zoom={9}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={attribution}
      />
      <Marker icon={markerIcon} position={coordinates}>
        <Popup>{markerPopupText}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
