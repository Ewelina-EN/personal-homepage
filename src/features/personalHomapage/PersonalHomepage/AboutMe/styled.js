import styled from "styled-components";
import { Button } from "../Button";
import { ReactComponent as Arrow } from "./arrow.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
    padding: 40px 40px 0px;
    text-align: justify;

    @media(max-widht: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        grid-grap: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        grid-template-columns: 1fr;
        grid-grap: 12px;    }
`;

export const Image = styled.img`
    width: 40vw;
    max-width: 398px;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-grap: 132px;
    }
`;

export const Text = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    letter-spacing: initial;
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 12px 0 0 0;
    letter-spacing: 0.05em;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Summary = styled.p`
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        margin-top: 16px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
        max-width: 570px;
    }
`;

export const ButtonLink = styled(Button)`
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 24px;
    }
`;

export const ButtonIcon = styled(Arrow)`
    margin-right: 16px;
`;