import { GithubProfile } from './state'
/* eslint-disable */
const actions = {
    setGithubProfiles(context, payload: GithubProfile[]): void {
        const profiles = context.state.githubProfiles
        profiles.splice(0, profiles.length)
        profiles.push(...payload)
        context.commit('UPDATE_GITHUB_PROFILES', profiles)
    },
    removeGithubProfile(context, payload: { id: number }): void {
        const profiles = context.state.githubProfiles
        const selectedProfile = profiles.findIndex((profile: GithubProfile) => profile.id === payload.id)
        profiles.splice(selectedProfile, 1)
        context.commit('UPDATE_GITHUB_PROFILES', profiles)
    }
}

export {
    actions
}
