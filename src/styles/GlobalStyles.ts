import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #161B22;
    --secondary-color: #475160;
    --tertiary-color: #f5f5f5;

    --title1: bold 28px 'Inter',sans-serif;
    --title2:bold 24px 'Inter',sans-serif;
    --text:normal 18px 'Inter',sans-serif;
    --label:normal 14px 'Inter',sans-serif;
    --span:normal 10px 'Inter',sans-serif;
  }
  
  *{
    margin: 0;
    padding: 0;
  }

  #root{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`

export default GlobalStyle