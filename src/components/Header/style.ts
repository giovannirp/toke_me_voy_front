import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["blue-900"]};
  padding: 2.5rem 0 2.0rem;

  h1 {
    font-size: 25px;
    color: #ffff;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.1rem;
`