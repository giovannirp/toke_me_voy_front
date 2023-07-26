import styled from "styled-components";

export const ContainerMenu = styled.nav`
  background:${props => props.theme["blue-600"]};
  height: 50px;
  box-shadow: 1px 1px 1px #4d4949;
`;

export const ContentMenu = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    height: 50px;

    li {
      a {
        font-size: 19px;
        padding-right: 30px;
        text-decoration: none;
        color: ${props => props.theme.white};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;