import styled from "styled-components";

const BoxResultsStyle = styled.section`
      border-top: 0.5px solid var(--secondary-color);
      height: 40%;
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

    @media(min-width: 768px){

    }

`

export default BoxResultsStyle