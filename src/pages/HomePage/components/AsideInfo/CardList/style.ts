import styled from "styled-components";

export const ContentAsidePrime = styled.section`
  position: relative;
  border: 2px solid ${props => props.theme.white};
  border-radius: 8px;
  max-width: 500px;
  margin-right: 10px;
  margin-left: 10px;
  width: 100%;
  overflow: hidden;
  height: 250px; 
  
  div {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 220px;
    width: 100%;
    height: 250px;
    background: #000000b5;
    color: ${props => props.theme.white};
    padding-left: 20px;
    padding-top: 3px;   

    span {
      margin-right: 20px;
      background: red;
      width: 90%;
      border-bottom: 1px solid #8a8888;
      display: inline-block;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 5px;
      margin-top: 8px;
    }

    p {
      color: ${props => props.theme.white};
      font-size: 12px;
    }
  }
`;
