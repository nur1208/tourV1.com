import styled from "styled-components";

export const RatingW = styled.div`
  margin-top: auto;
  display: flex;
`;

export const StarW = styled.div`
  height: 2rem;
  width: 2rem;
  margin-right: 1px;

  ${({ isActive }) =>
    isActive ? "fill: #55c57a;" : "fill: #bbb;"}
`;
