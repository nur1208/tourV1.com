import styled from "styled-components";

export const ReviewsW = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: calc(5rem + var(--section-rotate)) 0;
  position: relative;
  z-index: 1000;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background: linear-gradient(to right bottom, #7dd56f, #28b487);
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  -webkit-clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );


`;

export const ReviewsInnerW = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-column-gap: 6rem;
  grid-auto-flow: column;
  overflow-x: scroll;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;

  :before,
  :after {
    content: "";
    width: 2rem;
  }
`;
