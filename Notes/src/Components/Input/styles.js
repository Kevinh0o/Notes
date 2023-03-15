import styled from 'styled-components';

export const LoginInput = styled.input `
    font-size: 20px;
    outline: none;

    width: 270px;
    height: 60px;

    padding-left: 10px;

    border: 1px solid #646464;

    color: white;
    background-color: black;

    :focus{
        border-color: white;
    }
`;

export const AlertText = styled.p`
    font-size: 14px;

    font-weight: 900;

    color: red;
`;

export const Wrap = styled.div`
`;

export default LoginInput;