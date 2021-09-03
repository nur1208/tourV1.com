import styled from "styled-components";
import { NavEl } from "./header/navSc";

export const BtnContainer = styled(NavEl)`
  padding: 1rem 3rem;
  border-radius: 10rem;
  border: 1px solid currentColor !important;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  ${({ isGreen }) =>
    isGreen &&
    `
    background-color: #55c57a;
    color: #fff;
    :after {
      background-color: #55c57a;
    }
  `}

  ${({ isSmall }) =>
    isSmall &&
    `
    padding: 1.25rem 3rem !important;
    font-size: 1.4rem !important;
    grid-row: 1 / 3;
    justify-self: end;
    align-self: center;

  `}
  :hover {
    background-color: #f7f7f7;
    color: #777;
    text-shadow: none;
    border-color: #f7f7f7;
  }
`;

export const BtnContainerV2 = styled.a`
  font-size: 1.6rem;
  padding: 1.4rem 3rem;
  border-radius: 10rem;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  position: relative;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  font-weight: 400;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /*Add later when we use this for the button in form*/
  border: none;
  cursor: pointer;

  :hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  :active {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  :focus {
    outline: none;
    background-color: #2e864b;
  }

  ${({ isGreen }) =>
    isGreen &&
    `
    background-color: #55c57a;
    color: #fff;
    :after {
      background-color: #55c57a;
    }
  `}

  ${({ isSmall }) =>
    isSmall &&
    `
    padding: 1.25rem 3rem !important;
    font-size: 1.4rem !important;
    grid-row: 1 / 3;
    justify-self: end;
  align-self: center;

  `}
`;
