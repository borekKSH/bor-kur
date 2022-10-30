/* eslint-disable import/no-unresolved */

import L from "leaflet";
import iconMapPin from "../../public/icons/map-pin.svg";

const markerIcon = new L.Icon({
  iconUrl: iconMapPin.src,
  iconRetinaUrl: iconMapPin.src,
  iconSize: new L.Point(48, 48),
  className: "bg-neutral-900 rounded-full",
});

export default markerIcon;
