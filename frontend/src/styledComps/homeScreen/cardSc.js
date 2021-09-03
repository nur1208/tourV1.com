import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: 0.3s all;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  position: relative;
`;
