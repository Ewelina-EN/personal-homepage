import { ButtonLink } from "../../../AboutMe/styled";
import { Wrapper, Header, Paragraph } from "./styled";
import { ReactComponent as ErrorIcon } from "./error.svg";
import { userName } from "../../userName";

export const Error = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can check  them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink href={`https://github.com/${userName}`} target="_blank">
            Go to Github
        </ButtonLink>
    </Wrapper>
);