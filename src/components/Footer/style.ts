import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    background: ${props => props.theme["green-700"]};
    border-top: 2px solid ${props => props.theme["green-300"]};

`;