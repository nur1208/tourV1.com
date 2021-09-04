import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { MapWrapper } from "../../styledComps/tourDetails/mapSC";

export const Map = () => {
  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    // width: "100vw",
    // height: "100vh",
    zoom: 14,
  });

  return (
    <MapWrapper id="">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken="pk.eyJ1IjoibnVyMTIwOCIsImEiOiJja3Q1bnV5eDEwYWJrMm9vN3NvNm9pbG90In0.OSXoPwym8vl971TUr4FTRQ"
        onViewportChange={setViewport}
        className="mapWrapper"
        // onLoad={addLines}
        // ref={mapRef}
      >
        {/* <Source id="my-data" type="geojson" data={geojson}>
          <Layer />
        </Source> */}
        <Marker latitude={37.78} longitude={-122.45}>
          <div>state</div>
        </Marker>

        <Popup latitude={37.78} longitude={-122.442}>
          <div>state</div>
        </Popup>
      </ReactMapGL>
    </MapWrapper>
  );
};
