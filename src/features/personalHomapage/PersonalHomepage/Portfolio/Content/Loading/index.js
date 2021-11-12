import { Wrapper, StyledSpinner } from "./styled";

export const Loading = () => (
    <Wrapper>
        Pleas wait, projects are being loaded...
        <StyledSpinner />
    </Wrapper>
);