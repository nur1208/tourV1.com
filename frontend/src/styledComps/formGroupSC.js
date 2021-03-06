import styled from "styled-components";

export const FormGroupW = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }
  ${({ isBtnRight }) =>
    isBtnRight && `text-align: right !important;`}
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

export const FormPhotoUpload = styled.div`
  :not(:last-child) {
    margin-bottom: 2.5rem;
  }

  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;

export const FormUserPhoto = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const FormUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  :focus + label {
    outline: 3px solid #55c57a;
    outline-offset: 3px;
  }

  + label {
    color: #55c57a;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #55c57a;
    padding: 3px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer;
  }

  + label:hover {
    background-color: #55c57a;
    color: #fff;
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`;
