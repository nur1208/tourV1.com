import styled from "styled-components";

export const FormGroupW = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const FormInput = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: #fff;
  background-color: #f2f2f2;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* Pseudo element (a visible thing that isn't really in the DOM).
      Also needs -ms- */
  :focus {
    outline: none;
    border-bottom: 3px solid #55c57a;
  }

  :focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  ::-webkit-input-placeholder {
    color: #bbb;
  }
`;
