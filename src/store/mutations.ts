import { State, GithubProfile } from './state'

const mutations = {
    UPDATE_GITHUB_PROFILES(state: State, payload: GithubProfile[]): void {
        state.githubProfiles = payload
    }
}

export {
    mutations
}
