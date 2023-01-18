import styled from "styled-components";

const BoxResultsStyle = styled.section`
    @media(max-width: 768px){
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
    }

    background-color:var(--primary-color);
    width: 40%;
    color:var(--tertiary-color);

`

export default BoxResultsStyle