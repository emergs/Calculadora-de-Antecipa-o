import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px var(--secondary-color);
  font:var(--text);
  
  :focus{
    font:var(--label);
    font-weight: bold;
    outline: 0;
  }

  ::placeholder{
    font-style: oblique;
  }
`

export { Input }