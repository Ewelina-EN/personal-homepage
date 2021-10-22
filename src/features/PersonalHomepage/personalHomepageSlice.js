import { multicastChannel } from "@redux-saga/core";
import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
    name: "personalHomepage",
    initialStatus: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomePageSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = state => selectRepositoriesStatus(state).status;

export default personalHomePageSlice.reducers;