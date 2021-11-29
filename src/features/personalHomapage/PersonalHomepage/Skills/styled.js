import styled from "styled-components";
import { Subheader } from "../Subheader";
import { ReactComponent as dotIcon } from "./dotIcon.svg";

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    padding: 32px;
    margin-top: 72px;

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 48px;
        padding: 16px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    list-style: none;
    margin-top: 32px;
    padding: 0;

    @media(max-widht: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-widht: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size: 16px;
    }

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
        margin-top: 12px;
    }
`;

export const Item = styled.li`
    display: flex;
    line-height: 1.4;

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
    }
`;

export const Dot = styled(dotIcon)`
    color: ${({ theme }) => theme.colors.primary};
    height: auto;
    margin-right: 16px;

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 6px;
        margin-right: 8px;
    };
`;

export const StyledHeader = styled(Subheader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 12px;
    };
`;

