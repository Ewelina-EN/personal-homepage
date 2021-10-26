import { Error } from "./Error";
import { Loading } from "./Loading";
import { Projects } from "./Project";

export const Content = ({ status, repositories }) => {
    console.log("content")
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <Error />;

        default:
            return <Projects repositories={repositories} />
    };
};