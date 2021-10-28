import { Section, Header, StyledGitHubIcon, Projects } from "./styled";
import { Subheader } from "../Subheader";
import { Content } from "./Content";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { userName } from "../Portfolio/userName";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(userName));
    }, [dispatch]);

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
                <Content
                    status={repositoriesStatus}
                    repositories={repositories}
                />
            </Header>
        </Section>
    );
};