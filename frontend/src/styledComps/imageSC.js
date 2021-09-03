import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  height: 22rem;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(
    to right bottom,
    #7dd56f,
    #28b487
  );
  opacity: 0.7;
`;
