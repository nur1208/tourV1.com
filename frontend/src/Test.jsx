import React, { useRef } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import styled from "styled-components";

const W = styled.div`
  .mapWrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .mapboxgl-marker {
    background-image: url(${({ image }) => image});
    background-size: cover;
    width: 32px;
    height: 40px;
    cursor: pointer;
  }
`;
export const Test = () => {
  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    // width: "100vw",
    // height: "100vh",
    zoom: 14,
  });
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-122.4, 37.8] },
      },
    ],
  };

  //   const layerStyle = {
  //     id: "point",
  //     type: "circle",
  //     paint: {
  //       "circle-radius": 10,
  //       "circle-color": "#007cbf",
  //     },
  //   };

  const mapRef = useRef(null);

  const addLines = () => {
    const map = mapRef.current.getMap();
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.48369693756104, 37.83381888486939],
              [116.48348236083984, 37.83317489144141],
            ],
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#db1010",
        "line-width": 8,
      },
    });
  };
  return (
    <W image="../img/pin.png">
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken="pk.eyJ1IjoibnVyMTIwOCIsImEiOiJja3Q1bnV5eDEwYWJrMm9vN3NvNm9pbG90In0.OSXoPwym8vl971TUr4FTRQ"
        onViewportChange={setViewport}
        className="mapWrapper"
        onLoad={addLines}
        ref={mapRef}
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
    </W>
  );
};
