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
  const { title, latitude, longitude, markerPopupText } = content.fields;
  const coordinates: LatLngTuple = [latitude, longitude];

  return (
    <section
      className="z-20 w-full min-h-screen bg-yellow-50 dark:bg-neutral-800 transition-colors"
      id="contact"
    >
      <div className="w-full px-8 py-24 mx-auto max-w-container grid gap-12 place-items-center xl:gap-24">
        <h2 className="text-4xl font-bold tracking-tight text-center text-neutral-900 dark:text-white transition-colors sm:text-6xl xl:text-7xl">
          {title}
        </h2>
        <MapContainer
          className="w-full max-w-xs rounded h-80 md:max-w-96 md:h-96 lg:max-w-[30rem] lg:h-[30rem] xl:max-w-[35rem] xl:h-[35rem]"
          style={{ zIndex: 0 }}
          center={coordinates}
          zoom={6}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution={attribution}
          />
          <Marker icon={markerIcon} position={coordinates}>
            <Popup>{markerPopupText}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default Map;
