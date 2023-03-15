import styled from 'styled-components';

export const Wrap = styled.div `
`;

export const Interaction = styled.div `
    display: flex;
    justify-content: center;

    button{
        margin: 5px;

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