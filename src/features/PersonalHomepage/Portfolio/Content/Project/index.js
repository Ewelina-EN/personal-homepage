import {
    List,
    Tile, 
    Name, 
    Description, 
    Link,
    Links, 
    LinksRow, 
    LinksValue
} from "./styled";
import {getRepositories} from "../../../personalHomepageAPI";

export const Projects = ({ repositories }) => {
    console.log(11);
    getRepositories(repositories).then(repositories => {
        console.log("test"); console.log(repositories);
        return (
            <List>
                {repositories.map(({ id, name, description, homepage, html_url }) => (
                    <Tile key={id}>
                        <Name>{name}</Name>
                        <Description>{description}</Description>
                        <Links>
                            {homepage && (
                                <LinksRow>
                                    <dt>Demo:</dt>
                                    <LinksValue>
                                        <Link rel="noreferrer" href={homepage}>Preview site</Link>
                                    </LinksValue>
                                </LinksRow>
                            )}
                            <LinksRow>
                                <dt>Code:</dt>
                                <LinksValue>
                                    <Link rel="noreferrer" href={html_url}>GitHub Repository</Link>
                                </LinksValue>
                            </LinksRow>
                        </Links>
                    </Tile>
                ))}
            </List>);
    });
    }