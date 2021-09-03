import React from "react";
import { Card } from "../components/homeScreen/Card";
import {
  CardContainer,
  Main,
} from "../styledComps/homeScreen/homeScreenSC";

export const HomeScreen = () => {
  return (
    <Main id="Main">
      <CardContainer id="CardContainer">
        <Card />
      </CardContainer>
    </Main>
  );
};
