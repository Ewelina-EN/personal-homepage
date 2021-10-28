import styled from "styled-components";

export const List = styled.ul`
    margin-top: 56px;
    display: flex;
    list-style: none;
`;

export const Item = styled.li`
    margin-right: 24px;
`;

export const Link = styled.a`
    transition: color 0.3s;
`;

export const styledIcon = Icon => styled(Icon)`
    color: ${({theme})=>theme.colors.mineShaft};
    height: auto;
`;