import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { MapWrapper } from "../../styledComps/tourDetails/mapSC";

export const Map = () => {
  const [viewport, setViewport] = React.useState({
    longitude: -80.185942,
    latitude: 25.774772,
    zoom: 14,
  });

  return (
    <MapWrapper id="" image="../img/pin.png">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken="pk.eyJ1IjoibnVyMTIwOCIsImEiOiJja3Q1bnV5eDEwYWJrMm9vN3NvNm9pbG90In0.OSXoPwym8vl971TUr4FTRQ"
        onViewportChange={setViewport}
        className="mapWrapper"
        scrollZoom={false}
      >
        <Marker latitude={25.774772} longitude={-80.185942} />

        <Popup
          latitude={25.774772}
          longitude={-80.185942 + 0.0008}
        >
          <div>Day 1: Lummus Park Beach</div>
        </Popup>
      </ReactMapGL>
    </MapWrapper>
  );
};
