import styled from "styled-components";

export const Subheader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.textPrimary};

    @medi(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
        }
`;