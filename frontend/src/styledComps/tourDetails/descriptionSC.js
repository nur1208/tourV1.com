import styled from "styled-components";

export const DescriptionW = styled.section`
  background-color: #fcfcfc;
  margin-top: calc(0px - var(--section-rotate));
  display: flex;
  & > * {
    padding: 0 8vw;
    padding-top: 14vw;
    padding-bottom: calc(1vw + var(--section-rotate));
    flex: 0 0 50%;
  }
`;

export const OverviewBox = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
`;
