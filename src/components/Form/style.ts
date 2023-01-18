import styled from "styled-components";

const FormStyle = styled.section`
    @media(max-width:768px){
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
        font: var(--title1);
       }

       Label{
        font: var(--text);
       }

       span{
        font: var(--span);
       }

       button{
        width: 80%;
        margin: 0 10%;
        height: 35px;
       }

    }

    width: 60%;
    color: var(--tertiary-color);
`

export default FormStyle