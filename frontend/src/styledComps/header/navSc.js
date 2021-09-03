import styled from "styled-components";

export const NavContainer = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  ${({ isUser }) =>
    isUser
      ? `
  justify-content: flex-end;
  flex: 0 1 40%;
  `
      : ""}

  ${({ isTours }) =>
    isTours
      ? `
  flex: 0 1 40%;
  `
      : ""}

  @media only screen and (max-width: 62.5em) {
    ${({ isTours }) =>
      isTours
        ? `
  margin-bottom: 1.5rem;
  `
        : ""}
  }

  @media only screen and (max-width: 37.5em) {
    ${({ isTours }) =>
      isTours
        ? `
  margin-bottom: 0;
  `
        : ""}
    flex-direction: column;
  }
`;

export const NavEl = styled.a`
  &,
  :link,
  :visited {
    color: #f7f7f7;
    text-transform: uppercase;
    font-size: 1.6rem;
    text-decoration: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;
    font-weight: 400;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  :hover,
  :active {
    transform: translateY(-2px);
    text-shadow: 0 0.7rem 1rem black;
  }

  :not(:last-child) {
    margin-right: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    :not(:last-child) {
      margin-right: 0;
      margin-bottom: 1.2rem;
    }
  }

  :focus {
    outline: none;
  }
`;
