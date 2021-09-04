import styled from "styled-components";
import { Overlay } from "./imageSC";

export const TourDetailsW = styled.section`
  position: relative;
  height: 38vw;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
`;

export const HeaderHero = styled.div`
  height: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 50% 25%;
  }
`;

export const HeaderHeroOverlay = styled(Overlay)`
  opacity: 0.85;
`;

export const HeadingBoxGroup = styled.div`
  color: #f7f7f7;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
