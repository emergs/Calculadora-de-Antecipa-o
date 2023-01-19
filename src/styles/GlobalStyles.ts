import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #ffffff;
    --secondary-color: #2d67df;
    --tertiary-color: #93969a;

    --title1: bold 1.75rem 'Inter',sans-serif;
    --title2:bold 24px 'Inter',sans-serif;
    --text:normal 0.9rem 'Inter',sans-serif;
    --label:normal 1rem 'Inter',sans-serif;
    --span:italic 0.75rem 'Inter',sans-serif;
  }
  
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  #root{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color:var(--primary-color);
  }
`

export default GlobalStyle