import styled from "styled-components";
import { Subheader } from "../Subheader";
import { ReactComponent as dotIcon } from "./dotIcon.svg";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 4px;
    padding: 30px;
    margin-top: 50px;

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 48px;
        padding: 16px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 8px 32px; */
    list-style: none;
    margin-right: 10px;

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
        margin-top: 12px;
        padding-left: 5px;
    }
`;

export const Item = styled.li`
    display: flex;
    line-height: 1.4;
    align-items: center;

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
    }
`;

export const Dot = styled(dotIcon)`
    color: ${({ theme }) => theme.colors.scienceBlue};
    height: auto;
    margin-right: 15px;

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 6px;
        margin-right: 8px;
        height: 8px;
    }
`;

export const StyledHeader = styled(Subheader)`
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.iron};

    @media(max-widht: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding-bottom: 10px;
    }
`;
