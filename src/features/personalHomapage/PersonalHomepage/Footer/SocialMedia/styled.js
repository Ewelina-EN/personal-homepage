import styled from "styled-components";

export const List = styled.ul`
    margin-top: 56px;
    display: flex;
    list-style: none;
    margin-bottom: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 40px;
    }
`;

export const Item = styled.li`
    margin-right: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-right: 16px;
    }
`;

export const Link = styled.a`
    transition: color 0.3s;
    color: ${({ theme }) => theme.colors.textPrimary};
    
    &:hover {
    color: ${({ theme }) => theme.colors.primary};
}
`;

export const styledIcon = Icon => styled(Icon)`
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        widht: 32px;
    }
`;