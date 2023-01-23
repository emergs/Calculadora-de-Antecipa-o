import styled from "styled-components";

const Content = styled.main`
  background-color: var(--orange);
  display: flex;
  margin: 50px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 2px var(--secondary-color);
  color:var(--secondary-color);

  @media(min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    max-width: 1200px;
    height: 35rem;
  }
`

export { Content }