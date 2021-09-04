import React, { useEffect, useState } from "react";
import { Card } from "../components/homeScreen/Card";
import { getAllTours } from "../sendHttpRequests/tours";
import {
  CardContainer,
  Main,
} from "../styledComps/homeScreen/homeScreenSC";

export const HomeScreen = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const main = async () => {
      const doc = await getAllTours();
      setTours(doc);
    };
    main();
  }, []);

  return (
    <Main id="Main">
      <CardContainer id="CardContainer">
        {tours.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </CardContainer>
    </Main>
  );
};
