import styled from "styled-components";

export const ImagesWrapper = styled.section`
  /* display: -webkit-box; */
  /* display: -ms-flexbox; */
  display: flex;
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  /* -webkit-clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  ); */
  margin-top: calc(0px - var(--section-rotate));
  position: relative;
  z-index: 1000;
`;

export const ImageBox = styled.img`
  display: block;
  width: 100%;
  height: 110%;
  -o-object-fit: cover;
  object-fit: cover;
`;
