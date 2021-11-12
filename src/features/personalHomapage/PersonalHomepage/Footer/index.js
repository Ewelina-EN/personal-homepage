import { Text } from "../AboutMe/styled";
import { email } from "../email";
import { SocialMediaIcons } from "./SocialMedia";
import {
    Wrapper,
    Address,
    Email,
    EmailLink,
    Paragraph
} from "./styled";

export const Footer = () => (
    <Wrapper>
        <Text>Let's talk</Text>
        <Address>
            <Email>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </Email>
            <Paragraph>
                Thank you for visiting my personal homepage.
            </Paragraph>
            <SocialMediaIcons />
        </Address>
    </Wrapper >
);
