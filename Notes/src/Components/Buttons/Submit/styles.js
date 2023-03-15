import styled from 'styled-components';

const SubmitButton = styled.button `
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

export default SubmitButton;