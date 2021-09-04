import styled from "styled-components";

export const MapWrapper = styled.section`
  position: relative;
  height: 65rem;
  margin-top: calc(0px - var(--section-rotate));

  .mapWrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .marker {
    background-image: url("../img/pin.png");
    background-size: cover;
    width: 32px;
    height: 40px;
    cursor: pointer;
  }

  .mapboxgl-popup {
    max-width: 25rem;
  }

  .mapboxgl-popup-content {
    text-align: center;
    font-family: "Lato", sans-serif;
    padding: 1.5rem !important;
    font-size: 1.4rem;
    -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
  }
`;
