import styled from "styled-components";

export const Loader = styled.div `
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

    svg {
    width: 5em;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
    }

    circle {
    fill: none; 
    stroke: hsl(214, 97%, 59%);
    stroke-width: 4;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
    }

    @keyframes rotate4 {
    100% {
    transform: rotate(360deg);
    }
    }

    @keyframes dash4 {
    0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    }

    50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
    }

    100% {
    stroke-dashoffset: -125px;
    }
    }

`;
export default Loader