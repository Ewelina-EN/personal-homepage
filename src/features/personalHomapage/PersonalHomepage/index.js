import { Container } from "./styled";
import { Skills } from "./Skills";
import { newSkills, skills } from "./Skills/skills";
import { AboutMe } from "./AboutMe";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { ThemeSwitch } from "../../../common/ThemeSwitch";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
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
            <Portfolio />
            <Footer />
        </main>
    </Container>
);