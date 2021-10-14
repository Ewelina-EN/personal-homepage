import { Container } from "./styled";
import { Skills } from "./Skills";
import { newSkills, skills } from "./Skills/skills";
import { AboutMe } from "./AboutMe";

export const PersonalHomepage = () => (
    <Container>
        <AboutMe />
        <main>
            <Skills
                title="My skillset includes:"
                skills={skills}
            />
            <Skills
                title="What I want to learn next:"
                skills={newSkills}
            />
        </main>
    </Container>
);