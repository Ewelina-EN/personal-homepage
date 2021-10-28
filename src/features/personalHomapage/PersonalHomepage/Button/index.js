import styled from "styled-components";

export const Button = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    background: ${({theme})=>theme.colors.scienceBlue};
    border: 1px solid rgba(209, 213, 218, 0.3);
    box-sizing: border-box;
    border-radius: 4px;
`;