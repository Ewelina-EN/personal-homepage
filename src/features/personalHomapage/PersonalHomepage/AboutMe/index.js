import { email } from "../email";
import profilePhoto from "./profile.jpg";
import {
    Wrapper,
    Image,
    Text,
    Name,
    Summary,
    ButtonLink,
    ButtonIcon
} from "./styled";


export const AboutMe = () => (
    <Wrapper>
        <Image src={profilePhoto} alt="Ewelina Niewęgłowska" />
        <div>
            <Text>This is</Text>
            <Name>Ewelina Niewęgłowska</Name>
            <Summary> I love creating websites and applications supporting business development. </Summary>
            <ButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </ButtonLink>
        </div>
    </Wrapper>
);