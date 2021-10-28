import styled from "styled-components";
import { ReactComponent as SpinnerIcon } from "./spinner.svg";

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.mineShaft};
`;

export const StyledSpinner = styled(SpinnerIcon)`
    margin-top: 48px;
`;