import styled from 'styled-components';

export const Wrap = styled.div `
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

export const ResetPasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    
    align-items: center;

    div{
        margin: 10px;
    }
`;

export const PasswordResetInput = styled.input `
    outline: none;

    width: 250px;
    height: 40px;

    padding-left: 5px;

    border: 1px solid #646464;

    color: white;
    background-color: black;

    :focus{
        border-color: white;
    }
`;

export const SubmitButton = styled.button `
    width: 250px;
    height: 40px;

    border : none;
    border-radius: 10px;

    cursor: pointer;

    font-size: 20px;

    :focus{
        border : none;
        outline : none;
    }

    :hover{
        background-color : #387CFF;
    }

    color : white;
    background-color : #0057FF;
`;




export default Wrap;