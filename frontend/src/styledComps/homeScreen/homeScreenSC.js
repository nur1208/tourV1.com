import styled from "styled-components";

export const Main = styled.main`
  background-color: #f7f7f7;
  padding: 8rem 6rem;
  flex: 1;
  position: relative;
`;

export const CardContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7rem;
`;
