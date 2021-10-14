import styled from "styled-components";
import { Button } from "../Button";
// ButtonLink, ButtonIcon

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
    padding: 40px 40px 0px;
    text-align: justify;
`;

export const Image = styled.img`
    width: 40vw;
    max-width: 398px; //do zmiany
    border-radius: 100%;
`;

export const Text = styled.div`
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    letter-spacing: initial;
    color: ${({theme})=>theme.colors.slateGray};
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color: ${({theme})=> theme.colors.mineShaft};
    margin: 12px 0 0 0;
`;

export const Summary = styled.p`
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    color: ${({theme})=> theme.colors.slateGray};
`;

export const ButtonLink = styled(Button)`
    font-weight: 600;
    font-size: 20.0584px;
    line-height: 24px;
    /* display: flex; */
    display: inline-flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    margin-top: 32px;
    color: ${({theme})=>theme.colors.white};
`;