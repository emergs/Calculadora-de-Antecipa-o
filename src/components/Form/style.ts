import styled from "styled-components";

const FormStyle = styled.section`
    height: 60%;
    width: 100%;
    padding: 20px 0;

    form{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    }
    
    h1{
    padding-left: 10%;
    font: var(--title2);
    }

    Label{
    font: var(--text);
    color: gray;
    font-weight: bold;
    }

    span{
    font: var(--span);
    }

    button:last-child{
      height: 50px;
    }

    button{
    width: 80%;
    margin: 0 10%;
    margin-top: 2rem;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px var(--secondary-color);
    background-color: var(--secondary-color);
    font: var(--label);
    color: var(--primary-color);
    }

    button:hover{
      cursor: pointer;
    }

    p{
      color: red;
    }

    @media(min-width:768px){
      height: 100%;
      padding: 20px 0;
      width: 55%;
    }
`

export default FormStyle