import {
    Section,
    List,
    Item,
    Dot,
    StyledHeader
} from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <Dot />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);