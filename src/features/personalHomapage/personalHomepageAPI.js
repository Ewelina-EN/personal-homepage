import axios from "axios";

const githubAPIUrl = "https://api.github.com";

export const getRepositories =  username =>
    axios.get(`${githubAPIUrl}/users/${username}/repos`)
        .then(response => response.data);
