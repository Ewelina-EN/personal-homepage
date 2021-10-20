import { Section, Header, StyledGitHubIcon, Projects} from "./styled";
import { Subheader } from "../Subheader";

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
            </Header>
        </Section>
    )
};