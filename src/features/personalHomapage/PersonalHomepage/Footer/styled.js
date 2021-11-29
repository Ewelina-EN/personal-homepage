import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 120px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const Address = styled.address`
    font-style: unset;
`;

export const Email = styled.div`
    margin: 24px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 12px 0;
    }
`;

export const EmailLink = styled.a`
    font-weight: 900;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;

    &:hover {
        color: ${({theme})=> theme.colors.primary}
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
    }
`;