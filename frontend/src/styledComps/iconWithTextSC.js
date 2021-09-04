import styled from "styled-components";

export const Container = styled.div`
  font-size: ${({ isBig }) => (isBig ? "1.5rem" : "1.3rem")};
  display: flex;
  align-items: center;
  text-transform: ${({ isBig }) => (isBig ? "uppercase" : null)};
  font-weight: ${({ isBig }) => (isBig ? "700" : null)};
  text-shadow: ${({ isBig }) =>
    isBig ? "0 0.5rem 2rem rgba(0, 0, 0, 0.15)" : null};

  ${({ isBig }) =>
    isBig
      ? `:not(:last-child) {
            margin-right: 4rem;
          }`
      : null};

  ${({ hasMB }) =>
    hasMB
      ? `:not(:last-child) {
              margin-bottom: 2.25rem;
            }
          }`
      : null};

  svg {
    margin-right: 0.7rem;
    ${({ isMRMore }) =>
      isMRMore
        ? ` margin-right: 1.25rem;
          }`
        : "margin-right: 0.7rem;"};
  }
`;

export const Label = styled.span`
  font-weight: 700;
  margin-right: 2.25rem;
  text-transform: uppercase;
  font-size: 1.4rem;
`;
export const Text = styled.span`
  text-transform: capitalize;
`;
