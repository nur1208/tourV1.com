import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7f7f7;
  padding: 2.5rem 3rem;
  border-top: 1px solid #f1f1f1;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;
`;

export const Value = styled.span`
  font-weight: 700;
`;

export const Text = styled.span`
  color: #999;
`;

export const Ratings = styled.p`
  grid-row: 2 / 3;
`;
