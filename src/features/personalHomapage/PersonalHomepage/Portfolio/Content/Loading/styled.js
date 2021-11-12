import styled, { keyframes } from "styled-components";
import { ReactComponent as SpinnerIcon } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 88px;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-widht: ${({theme})=> theme.breakpoints.mobileMax}px) {
        font-size: 17px;
        margin-top: 32px
    }
`;

export const StyledSpinner = styled(SpinnerIcon)`
    margin-top: 48px;
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.primary};
    height: auto;

    @media(max-widht: ${({theme})=> theme.breakpoints.mobileMax}px) {
        width: 60px;
        margin-top: 32px
    }
`;