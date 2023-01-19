import styled from "styled-components";

const Content = styled.main`
  background-color: var(--primary-color);
  width: 90%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 2px var(--secondary-color);
  color:var(--secondary-color);

  @media(min-width: 768px){
    display: flex;

  }
`

export { Content }