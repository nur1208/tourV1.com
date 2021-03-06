import styled from "styled-components";

export const UserViewMenuItemW = styled.li`
  margin: 1rem 0;
  border-left: 0 solid #fff;
  transition: all 0.3s;

  ${({ isActive }) =>
    isActive &&
    `
  
    border-left: 4px solid #fff !important;
    a {
      transform: translateX(-3px);
    }
  `}

  :hover {
    border-left: 4px solid #fff !important;
  }
  a:link,
  a:visited {
    padding: 1rem 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  a:hover,
  a:active {
    transform: translateX(3px);
  }

  svg {
    height: 1.9rem;
    width: 1.9rem;
    fill: #f7f7f7;
    margin-right: 2rem;
  }
`;
