import { ButtonLink } from "../../../AboutMe/styled";
import { Wrapper, Header, Paragraph } from "./styled";
import { ReactComponent as ErrorIcon } from "./error.svg";

export const Error = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.
            You can check  them directly on Github.
        </Paragraph>
        <ButtonLink
            href={`https://github.com/Ewelina-EN`} target="_blank"
        >
            Go to Github
        </ButtonLink>

    </Wrapper>
);