import styled from "styled-components";

const BoxStyle = styled.div`
  @media(max-width:768px){
    background-color:'inherit';
    width: 100%;
    height: 'auto';
    padding:0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  display: flex;
  flex-direction:column;
`
export { BoxStyle }