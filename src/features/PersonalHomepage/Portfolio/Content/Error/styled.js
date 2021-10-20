import styled from "styled-components";

export const Wrapper = styled.article`
    margin-top: 95px;
    display: grid;
    justify-items: center;
    grid-gap: 32px;
    text-align: center;
`;

export const Header = styled.header`
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.mineShaft};
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.mineShaft};
`;