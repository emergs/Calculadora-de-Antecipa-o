import styled from "styled-components";

const Content = styled.main`
  @media(max-width: 768px){
    background-color: var(--secondary-color);
    width: 90%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  background-color: var(--secondary-color);
  display:flex;
  height: 40rem;
  width: 80%;

`

export { Content }