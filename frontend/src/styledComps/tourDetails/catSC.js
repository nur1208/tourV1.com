import styled from "styled-components";

export const CatW = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: 3rem;
  padding-bottom: 11rem;
  padding-top: calc(15rem + var(--section-rotate));
  background-color: #f7f7f7;
`;

export const CatInnerW = styled.div`
  position: relative;
  max-width: 105rem;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  padding: 9rem 5rem 9rem 21rem;
  border-radius: 2rem;
  -webkit-box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
`;
