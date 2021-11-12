import styled from "styled-components";

export const Wrapper = styled.article`
    margin-top: 95px;
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
    color: ${({theme})=>theme.colors.textPrimary};

    @media(max-widht: ${({theme})=> theme.breakpoints.mobileMax}px) {
        grid-gap: 24px;
    }
`;

export const Header = styled.header`
    font-weight: bold;
    font-size: 24px;

    @media(max-widht: ${({theme})=> theme.breakpoints.mobileMax}px) {
        grid-gap: 17px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;

    @media(max-widht: ${({theme})=> theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;