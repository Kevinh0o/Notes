import styled from 'styled-components';

const LogOutButton = styled.button `
    height : 0px;
    border : none;
    cursor: pointer;

    font-size: 20px;
    text-decoration: underline;

    :focus{
        border : none;
        outline : none;
    }

    :hover{
        color : #0057FF;
    }

    color : white;
    background-color : transparent;
`;

export default LogOutButton;