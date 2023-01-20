import styled from "styled-components";

const BoxResultsStyle = styled.section`
      background-color: #dce3ef;
      height: auto;
      width: 100%;
      padding: 5% 10%;

      h1{
        font: var(--title2);
        margin-bottom: 15px;
      }

      ul{
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      ul li{
        font: var(--label);
      }

      @media(min-width:768px){
      height: 100%;
      padding: 30px 20px;
      background-color: #dce3ef;
      text-align: center;
      width: 45%;
    }

`

export default BoxResultsStyle