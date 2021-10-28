import { ReactComponent as GitHubIcon } from "./SocialMediaIcons/github.svg";
import { ReactComponent as FacebookIcon } from "./SocialMediaIcons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./SocialMediaIcons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./SocialMediaIcons/instagram.svg";
import { styledIcon } from "./styled";

export const links = [
    {
        name: "GitHub",
        url: "https://github.com/Ewelina-EN",
        Icon: styledIcon(GitHubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/",
        Icon: styledIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ewelina-nieweglowska/",
        Icon: styledIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        Icon: styledIcon(InstagramIcon),
    },
];