import styled from 'styled-components';

const Wrap = styled.div `
    ul{
        list-style: none;
        display: flex;
        flex-direction: row;

        justify-content: space-around;
        align-items: flex-start;
        
    }
    span{
        font-weight: 100;
    }
    @media (max-width: 400px){
    }
`;

export default Wrap;