import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    margin-top: 24px;
    padding: 0;
    grid-gap: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`;

export const Tile = styled.li`
    background: ${({ theme }) => theme.colors.boxBackground};
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    padding: 56px;
    margin: 0;
    transition: border-color 0.3s;
    border-radius: ${({ theme }) => theme.borderRadiusSmall};

    &:hover {
        border-color: ${({ theme }) => theme.colors.tile.borderHover}
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 20px;
    }
`;

export const Name = styled.h3`
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.tile.header};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 16px;
    }
`;

export const Description = styled.p`
    margin-top: 24px;
    line-height: 140%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    padding-bottom: 1px;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }) =>theme.colors.primary};

    &:hover {
        border-color: unset;
    }
`;

export const Links = styled.dl`
    display: grid;
    grid-gap: 8px;
    line-height: 160%;
    margin-top: 24px;
    margin-bottom: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
        font-size: 14px;
    }
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;



