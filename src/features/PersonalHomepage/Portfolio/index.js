import { Section, Header, StyledGitHubIcon, Projects } from "./styled";
import { Subheader } from "../Subheader";
import { Content } from "./Content";

export const Portfolio = () => {
    return (
        <Section>
            <Header>
                <StyledGitHubIcon />
                <Subheader>
                    Portfolio
                </Subheader>
                <Projects>
                    My recent projects
                </Projects>
                <Content />
            </Header>
        </Section>
    )
};