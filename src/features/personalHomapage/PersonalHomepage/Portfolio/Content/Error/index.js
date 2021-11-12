import { ButtonLink } from "../../../AboutMe/styled";
import { Wrapper, Header, Paragraph } from "./styled";
import { ReactComponent as ErrorIcon } from "./error.svg";

export const Error = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.
            You can check  them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink href={`https://github.com/Ewelina-EN`} target="_blank">
            Go to Github
        </ButtonLink>
    </Wrapper>
);