import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 80px;
`;

export const Address = styled.address`
    font-style: unset;
`;

export const Email = styled.div`
    margin: 24px 0;
`;

export const EmailLink = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.mineShaft};
    text-decoration: none;
`;

export const Paragraph = styled.p`
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.mineShaft};
`;