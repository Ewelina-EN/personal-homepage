import { links } from "./links";
import { List, Item, Link } from "./styled";

export const SocialMediaIcons = () => (
    <List>
        {links.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noreferrer">
                    <Icon />
                </Link>
            </Item>
        ))}
    </List>
);