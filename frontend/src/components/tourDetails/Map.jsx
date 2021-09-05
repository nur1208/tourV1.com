import React, { Fragment, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { MapWrapper } from "../../styledComps/tourDetails/mapSC";

export const Map = ({ locations }) => {
  // const [stateLocations, setStateLocations] = useState({});
  const [isOpens, setIsOpens] = useState([]);
  const [viewport, setViewport] = React.useState({
    longitude: locations
      ? locations[0].coordinates[0]
      : -80.185942,
    latitude: locations ? locations[0].coordinates[1] : 25.774772,
    zoom: 6.87523408007962,
  });

  useEffect(() => {
    if (locations) {
      setIsOpens(Array(locations.length).fill(true));
      setViewport({
        ...viewport,
        longitude: locations[0].coordinates[0],
        latitude: locations[0].coordinates[1],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations]);
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
        {locations &&
          locations.map(
            ({ coordinates, day, description }, index) => (
              <Fragment key={index}>
                <Marker
                  latitude={coordinates[1]}
                  longitude={coordinates[0]}
                />
                {isOpens[index] && (
                  <Popup
                    latitude={coordinates[1] - 0.1}
                    longitude={coordinates[0] + 0.1}
                    onClose={() =>
                      setIsOpens(
                        isOpens.map((item, openIndex) =>
                          openIndex === index ? false : item
                        )
                      )
                    }
                  >
                    <div>
                      Day {day}: {description}
                    </div>
                  </Popup>
                )}
              </Fragment>
            )
          )}
      </ReactMapGL>
    </MapWrapper>
  );
};
