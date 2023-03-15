import styled from 'styled-components';

export const Wrap = styled.div `
    width: 400px;
    height: auto;

    margin: 20px;
    padding: 0px 10px 10px 10px;

    border-radius: 15px;

    background-color: #2C2C2C;

    @media (max-width: 600px){
        width: 100vw;
        margin: 0px;
        margin-bottom: 10px;
    }
`;

export const Content = styled.form `
    height: 300px;
    display: flex;
    font-family: 'Inter', sans-serif;

    padding: 0px 40px 10px 10px;
    margin-left: 20px;
    
    overflow-wrap: break-word;

    input{
        font-weight: 800;
        font-size: 18px;
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;

        outline: none;

        color: white;
        border: 0px solid transparent;
        background-color: transparent;
    }
    textarea{
        height: 80%;

        resize: none;

        font-weight: 100;
        font-size: 16px;
        padding-left: 20px;

        outline: none;

        color: white;
        border: 0px solid transparent;
        background-color: transparent;
    }
    button{
        align-self: flex-end;

        height: 40px;
        width: 40px;

        background-color: #373737;
        border: 0px solid #373737;
        border-radius: 6px;
    }
    button:hover{
        background-color: #676666;
        cursor: pointer;
    }
    button:focus{
        background-color: #373737;
    }
`;

export default Wrap;