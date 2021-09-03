import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;

  h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    grid-column: 1 / -1;
  }

  p {
    grid-column: 1 / -1;
    font-size: 1.5rem;
    font-style: italic;
    margin-top: -1rem;
    margin-bottom: 0.75rem;
  }
`;
