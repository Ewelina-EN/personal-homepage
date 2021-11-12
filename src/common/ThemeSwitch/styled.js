import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    outline-offset: 8px;
    background: none;
    border: none;
    color: inherit;
`;

export const Text = styled.span`
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    margin-right: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    display: flex;
    width: 48px;
    background: ${({ theme }) => theme.colors.themeSwitch.background};
    border: 1px solid;
    padding: 2px;
    border-radius: 12px;
`;

export const IconWrapper = styled.span`
    display: flex;
    background: currentColor;
    border-radius: 50%;
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translatex(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;