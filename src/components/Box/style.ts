import styled from "styled-components";

const BoxStyle = styled.div`
  @media(max-width:768px){
    background-color: ${props => props.color ? props.color : 'inherit'} ;
    width: 80%;
    height: ${props => props.property ? props.property : 'auto'};
    padding:0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export { BoxStyle }