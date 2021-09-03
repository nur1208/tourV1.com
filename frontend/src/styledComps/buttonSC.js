import styled from "styled-components";
import { NavEl } from "./header/navSc";

export const BtnContainer = styled(NavEl)`
  padding: 1rem 3rem;
  border-radius: 10rem;
  border: 1px solid currentColor !important;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  :hover {
    background-color: #f7f7f7;
    color: #777;
    text-shadow: none;
    border-color: #f7f7f7;
  }
`;
