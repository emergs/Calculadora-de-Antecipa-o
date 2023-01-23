import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #ffffff;
    --secondary-color: #2d67df;
    --tertiary-color: #93969a;
    --orange : #ffa500;

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

  body{
    display: flex;
    align-items: center;
    overflow-y: auto;
  }

  #root{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:var(--primary-color);

    @media(min-width: 768px){
      height: 100vh;
    }
  }
`

export default GlobalStyle