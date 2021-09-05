import styled from "styled-components";

export const ReviewCardW = styled.div`
  width: 30rem;
  padding: 4rem;
  background-color: #f7f7f7;
  border-radius: 3px;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  scroll-snap-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const ReviewText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 400;
`;
