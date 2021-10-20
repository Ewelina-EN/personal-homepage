import profilePhoto from "./profile.jpg";
import {
    Wrapper,
    Image,
    Text,
    Name,
    Summary,
    ButtonLink
} from "./styled";


export const AboutMe = () => (
    <Wrapper>
        <Image src={profilePhoto} alt="Ewelina Niewęgłowska" />
        <div>
            <Text>This is</Text>
            <Name>Ewelina Niewęgłowska</Name>
            <Summary> I love creating websites and applications supporting business development. </Summary>
            <ButtonLink>
                {/* <ButtonIcon /> */}
                Hire me
            </ButtonLink>
        </div>
    </Wrapper>
);