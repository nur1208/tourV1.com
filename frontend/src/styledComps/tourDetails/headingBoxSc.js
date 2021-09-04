import styled from "styled-components";
import { HeadingTertiary } from "../../components/HeadingTertiary";

export const HeadingBoxW = styled.div`
  position: absolute;
  bottom: 13vw;
  left: 50%;
  top: 35%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const HeadingPrimary = styled(HeadingTertiary)`
  font-size: 5rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
`;
