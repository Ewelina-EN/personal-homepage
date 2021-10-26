import axios from "axios";
import { userName } from "./Portfolio/userName";

const githubAPIUrl = "https://api.github.com";

    export const getRepositories =  (repositories) =>
        axios.get(`${githubAPIUrl}/users/${userName}/repos`)
            .then(response => repositories = response.data);
