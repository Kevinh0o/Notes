import styled from 'styled-components';

export const Wrap = styled.div `
    width: 400px;
    height: auto;

    margin: auto;
    margin-bottom: 20px;

    border-radius: 15px;

    background-color: #2C2C2C;

    @media (max-width: 450px){
        width: 100vw;
    }
`;

export const Interaction = styled.div `
    height: 10%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    p{
        font-family: 'Inter', sans-serif;

        font-size: 14px;
        font-weight: 800;
        color: #949494;
    }
    button{
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

export const Content = styled.div `
    font-family: 'Inter', sans-serif;

    padding: 0px 40px 10px 10px;
    
    overflow-wrap: break-word;

    p{
        font-weight: 300;
        font-size: 20px;
        padding-left: 20px;
    }
    h2{
        font-weight: 800;
    }
`;

export default Wrap;