import styled from "styled-components";

export const OverviewBoxGroupW = styled.div`
  :not(:last-child) {
    margin-bottom: 7rem;
  }
`;

export const HeadingSecondary = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#7dd56f),
    to(#28b487)
  );
  margin-bottom: 3.5rem;
  background-image: linear-gradient(to right, #7dd56f, #28b487);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
`;
