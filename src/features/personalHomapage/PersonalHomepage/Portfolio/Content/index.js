import { Error } from "./Error";
import { Loading } from "./Loading";
import { Projects } from "./Project";

export const Content = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <Error />;

        case "success":
            return <Projects repositories={repositories} />;

        default:
            throw new Error(`incorrect status: ${status}`);
    };
};