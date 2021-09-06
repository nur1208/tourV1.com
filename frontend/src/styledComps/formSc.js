import styled from "styled-components";

export const FormW = styled.div`
  margin: 0 auto;

  ${({ isUserView }) =>
    isUserView
      ? `
      
      max-width: 68rem;
      margin: 0 auto;
      padding: 0 8rem;
      
      `
      : `
  
  
      max-width: 55rem;
      background-color: #fff;
      box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
      padding: 5rem 7rem;
      border-radius: 5px;
      
  
  `}
`;

export const FormNotComp = styled.form``;
