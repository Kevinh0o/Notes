import styled from 'styled-components';

export const Wrap = styled.div `
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    a{
        color: white;
    }
    a:hover{
        color: #0057FF;
    }
`;

export const Card = styled.div `
    width: 400px;
    height: 500px;

    border: 1px solid #646464;

    background-color: #0A0A0A;

    @media (max-width: 600px){
        width: 100vw;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    div{
        margin: 10px;
    }
`;


export default Wrap;