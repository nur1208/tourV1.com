import styled from "styled-components";

export const OverviewBoxDetail = styled.div`
  font-size: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 400;

  svg {
    margin-right: 1.25rem;
  }

  :not(:last-child) {
    margin-bottom: 2.25rem;
  }
`;
