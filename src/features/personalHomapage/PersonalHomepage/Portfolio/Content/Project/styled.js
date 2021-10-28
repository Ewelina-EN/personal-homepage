import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding: 0;
    grid-gap: 40px;
`;

export const Tile = styled.li`
    background-color: ${({theme})=> theme.colors.white};
    box-shadow: ${({theme})=>theme.boxShadow};
    box-sizing: border-box;
    border: 6px solid rgba(209, 213, 218, 0.3);
    padding: 56px;
    margin: 0;
`;

export const Name = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({theme})=>theme.colors.scienceBlue};
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: ${({theme})=>theme.colors.slateGray};
`;

export const Link = styled.a`
    text-decoration: none;
    padding-bottom: 1px;
`;

export const Links = styled.dl`
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: ${({theme})=>theme.colors.scienceBlue};
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;

